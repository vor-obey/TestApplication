import { createLazyFileRoute } from "@tanstack/react-router";
import { Home } from "../../pages/Home.tsx";

export const Route = createLazyFileRoute("/_authenticated/")({
  component: Home,
});
