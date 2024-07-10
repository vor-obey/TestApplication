import { createLazyFileRoute } from "@tanstack/react-router";
import { Settings } from "../../Pages/Settings.tsx";

export const Route = createLazyFileRoute("/_authenticated/settings")({
  component: Settings,
});
