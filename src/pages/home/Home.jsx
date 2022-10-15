import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Presentation } from "../../components/presentation/Presentation";

export const Home = () => {
  return (
    <div>
      <Presentation />
      <LoginForm />
    </div>
  );
};
