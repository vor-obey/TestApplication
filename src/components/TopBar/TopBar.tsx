import { Flex } from "@radix-ui/themes";
import { useAuth } from "../../hooks/useAuth.ts";
import { Header } from "../../shared/components/Header/Header.tsx";

const tabs = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/settings",
    name: "Settings",
  },
];

export const TopBar = () => {
  const { onLogout, isLogged } = useAuth();

  const hideTopBar = !isLogged();

  return (
    <Flex width="100%" height={"100%"}>
      <Header tabs={tabs} logout={onLogout} hide={hideTopBar} />
    </Flex>
  );
};
