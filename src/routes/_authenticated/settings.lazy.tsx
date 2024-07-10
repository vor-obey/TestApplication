import { createLazyFileRoute } from "@tanstack/react-router";
import { Settings } from "../../pages/Settings.tsx";

export const Route = createLazyFileRoute("/_authenticated/settings")({
  component: Settings,
});
