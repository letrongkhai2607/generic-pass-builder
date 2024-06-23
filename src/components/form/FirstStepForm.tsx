"use client";
import { useFormStore } from "@/store/useFormStore";
import { passkitTemplateJson } from "@/utils/common";
import Button from "@mui/material/Button";

import { Container, Stack } from "@mui/system";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FormStepProps } from "./SecondStepForm";
import CustomTextField from "./TextField";

const FirstStepForm = ({ stepStep }: FormStepProps) => {
  const information = useFormStore((state) => state.information);

  const updateInformation = useFormStore((state) => state.updateInformation);
  const resetInformation = useFormStore((state) => state.resetInformation);

  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  const { handleSubmit, control, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      header: information.header,
      subHeader: information.subHeader,
      title: code ? code : information.title,
    },
  });
  const onReset = () => {
    resetInformation();
    reset();
  };
  const onSubmit = (data: any) => {
    updateInformation({
      ...data,
    });
    stepStep(2);
  };

  const handleExportToJson = () => {
    console.log("information", passkitTemplateJson(information));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Stack flexDirection={`column`} gap={`1rem`}>
          <div>
            <CustomTextField
              label={`Passkit Logo`}
              placeholder={`Passkit Logo`}
              control={control}
              name="logo"
            />
          </div>
          <div>
            <CustomTextField
              label={`Title`}
              placeholder={`Title`}
              control={control}
              name="title"
            />
          </div>
          <div>
            <CustomTextField
              label={`Sub header`}
              placeholder={`Sub header`}
              control={control}
              name="subHeader"
            />
          </div>
          <div>
            <CustomTextField
              label={`Header`}
              placeholder={`Header`}
              control={control}
              name="header"
            />
          </div>
          <div>
            <CustomTextField
              label={`QR Code`}
              placeholder={`QR Code`}
              control={control}
              name="qrCode"
            />
          </div>
          <div>
            <CustomTextField
              label={`Hex Background Color`}
              placeholder={`Hex Background Color`}
              control={control}
              name="hexBackgroundColor"
            />
          </div>

          <Button onClick={() => onReset()} variant="contained" type="submit">
            Reset
          </Button>
          <Button
            onClick={() => handleExportToJson()}
            variant="contained"
            type="submit"
          >
            Export To Json
          </Button>
        </Stack>
      </Container>
    </form>
  );
};

export default FirstStepForm;
