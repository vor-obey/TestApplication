import { memo, useCallback } from "react";
import { Flex } from "@radix-ui/themes";
import { useAuth } from "../hooks/useAuth.ts";
import LoginForm from "../components/LoginForm/LoginForm.tsx";

export const Login = memo(() => {
  const { onLogin, inProgress, error } = useAuth();

  const onSubmit = useCallback(
    async (e) => {
      if (!e) {
        return;
      }

      e.preventDefault();

      const { email, password } = e.currentTarget;
      await onLogin(email?.value, password?.value);
    },
    [onLogin],
  );

  return (
    <Flex width="100vw" minHeight="100vh" align="center" justify="center">
      <LoginForm submit={onSubmit} inProgress={inProgress} loginError={error} />
    </Flex>
  );
});
