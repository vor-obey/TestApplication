import { Flex } from "@radix-ui/themes";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { AuthContext } from "../hooks/useAuth.ts";
import { TopBar } from "../components/TopBar/TopBar.tsx";

type RouterContext = {
  authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <TopBar />

      <Flex width="100vw" minHeight="100vh" align="center" justify="center">
        <Outlet />
      </Flex>
      <TanStackRouterDevtools />
    </>
  ),
});
