"use client";
import { useFormStore } from "@/store/useFormStore";
import Button from "@mui/material/Button";

import { Container, Stack } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import CustomTextField from "./TextField";

export interface FormStepProps {
  stepStep: (value: number) => void;
}
const SecondStepForm = ({ stepStep }: FormStepProps) => {
  const information = useFormStore((state) => state.information);
  const updateInformation = useFormStore((state) => state.updateInformation);
  const resetInformation = useFormStore((state) => state.resetInformation);
  const { handleSubmit, control, getValues } = useForm({
    mode: "onChange",
    defaultValues: {
      expYear: information.expYear,
      age: information.age,
    },
  });
  const onSubmit = (data: any) => {
    updateInformation({
      ...data,
    });
    stepStep(3);
  };
  const onReset = () => {
    resetInformation();
    stepStep(1);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Stack flexDirection={`column`} gap={`1rem`}>
          <div>
            <CustomTextField
              label={`Age`}
              placeholder={`Age`}
              control={control}
              name="age"
            />
          </div>
          <div>
            <CustomTextField
              label={`Experience`}
              placeholder={`Experience`}
              control={control}
              name="expYear"
            />
          </div>

          <Button variant="contained" type="submit">
            Confirm
          </Button>
          <Button onClick={() => onReset()} variant="contained" type="submit">
            Reset
          </Button>
          <Button onClick={() => stepStep(1)} variant="contained" type="submit">
            Return
          </Button>
        </Stack>
      </Container>
    </form>
  );
};

export default SecondStepForm;
