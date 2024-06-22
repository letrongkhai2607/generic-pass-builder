"use client";
import { useFormStore } from "@/store/useFormStore";
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

  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  const { handleSubmit, control, getValues } = useForm({
    mode: "onChange",
    defaultValues: {
      header: information.header,
      subHeader: information.subHeader,
      title: code ? code : information.title,
    },
  });
  const onSubmit = (data: any) => {
    updateInformation({
      ...data,
    });
    stepStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Stack flexDirection={`column`} gap={`1rem`}>
          <div>
            <CustomTextField
              label={`Title`}
              placeholder={`Title`}
              disabled={code ? true : false}
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

          <Button variant="contained" type="submit">
            Confirm
          </Button>
        </Stack>
      </Container>
    </form>
  );
};

export default FirstStepForm;
