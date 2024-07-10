import { FC, memo } from "react";
import { Link } from "@tanstack/react-router";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import css from "./header.module.css";

interface Tab {
  path: string;
  name: string;
}

interface IProps {
  tabs: Tab[];
  logout: () => void;
  hide: boolean;
}

export const Header: FC = memo(
  ({ tabs, logout, hide }: IProps) => {
    if (hide) {
      return null;
    }

    const links = tabs?.map(({ path, name }) => (
      <Link to={path} key={path}>
        <Text color="blue">{name}</Text>
      </Link>
    ));

    return (
      <Box width="100vw" position="fixed" top="0">
        <Flex className={css.topBar} justify="between" align="center" p="3">
          <Flex gap="3">{links}</Flex>
          <Flex>
            <Button onClick={logout}>Log out</Button>
          </Flex>
        </Flex>
      </Box>
    );
  },
  (prevProps, nextProps) => prevProps.hide === nextProps.hide,
);
