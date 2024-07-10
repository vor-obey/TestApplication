import { createLazyFileRoute } from "@tanstack/react-router";
import { About } from "../../pages/About.tsx";

export const Route = createLazyFileRoute("/_authenticated/about")({
  component: About,
});
