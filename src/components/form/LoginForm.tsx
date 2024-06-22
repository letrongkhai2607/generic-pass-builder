"use client";
import Button from "@mui/material/Button";
import { Box, Container, Stack } from "@mui/system";

import { useSearchParams } from "next/navigation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BasicCard from "../BasicCard";
import FirstStepForm from "./FirstStepForm";
import SecondStepForm from "./SecondStepForm";
import CustomTextField from "./TextField";

const LoginForm = () => {
  const [step, stepStep] = useState(1);

  return (
    <Box padding={`1rem`}>
      {step === 1 ? (
        <div>
          <FirstStepForm stepStep={stepStep} />
        </div>
      ) : (
        <div>
          {" "}
          <SecondStepForm stepStep={stepStep} />
        </div>
      )}
    </Box>
  );
};

export default LoginForm;
