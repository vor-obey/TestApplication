import { createLazyFileRoute } from "@tanstack/react-router";
import { Home } from "../../Pages/Home.tsx";

export const Route = createLazyFileRoute("/_authenticated/")({
  component: Home,
});
