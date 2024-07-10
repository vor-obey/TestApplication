import { useAuth } from "./hooks/useAuth.ts";
import { Theme } from "@radix-ui/themes";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import { routeTree } from "./routeTree.gen.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const router = createRouter({
  routeTree,
  context: { authentication: undefined! },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  const authentication = useAuth();
  return (
    <Theme>
      <RouterProvider router={router} context={{ authentication }} />
    </Theme>
  );
};
