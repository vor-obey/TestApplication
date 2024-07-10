import { createLazyFileRoute } from "@tanstack/react-router";
import { About } from "../../Pages/About.tsx";

export const Route = createLazyFileRoute("/_authenticated/about")({
  component: About,
});
