import { createLazyFileRoute } from "@tanstack/react-router";
import { Login } from "../pages/Login.tsx";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});
