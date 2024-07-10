import React, { FormEvent } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { TextField } from "@radix-ui/themes";
import { MainButton } from "../../shared/components/MainButton/MainButton.tsx";
import css from "./LoginForm.module.css";

const { Root } = TextField;
interface IProps {
  submit: (e: FormEvent<T>) => void;
  inProgress?: boolean;
  loginError?: string | null | undefined;
}

const LoginForm = ({ submit, inProgress, loginError }: IProps) => (
  <Form.Root className={css.FormRoot} onSubmit={submit}>
    <Form.Field className={css.FormField} name="email">
      <Flex align="baseline" justify="between">
        <Form.Label className={css.FormLabel}>Email</Form.Label>
        <Form.Message className={css.FormMessage} match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className={css.FormMessage} match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </Flex>
      <Form.Control asChild>
        <Root size="2" placeholder="Enter email" required type="email" />
      </Form.Control>
    </Form.Field>
    <Form.Field className={css.FormField} name="password">
      <Flex align="baseline" justify="between">
        <Form.Label className={css.FormLabel}>Password</Form.Label>
        <Form.Message className={css.FormMessage} match="valueMissing">
          Please enter your password
        </Form.Message>
        <Form.Message className={css.FormMessage} match="typeMismatch">
          Please provide a valid password
        </Form.Message>
      </Flex>
      <Form.Control asChild>
        <Root size="2" placeholder="Enter password" required type="password" />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <MainButton inProgress={inProgress}>Login</MainButton>
    </Form.Submit>
    <Box mt="2">
      <Text color="red" size="2">
        {loginError}
      </Text>
    </Box>
  </Form.Root>
);

export default LoginForm;
