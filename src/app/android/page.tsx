import LoginForm from "@/components/form/LoginForm";
import HomeContainer from "@/containers/HomeContainer";
import React, { useState } from "react";

const Login = () => {
  return (
    <HomeContainer>
      <LoginForm />
    </HomeContainer>
  );
};

export default Login;
