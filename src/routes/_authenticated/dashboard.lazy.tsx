import { createLazyFileRoute } from "@tanstack/react-router";
import { Dashboard } from "../../pages/Dashboard.tsx";

export const Route = createLazyFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
});
