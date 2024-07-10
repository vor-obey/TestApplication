import { createLazyFileRoute } from "@tanstack/react-router";
import { Login } from "../Pages/Login.tsx";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});
