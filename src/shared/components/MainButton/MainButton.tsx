import React, { FC, ReactNode } from "react";
import { Spinner } from "@radix-ui/themes";
import css from "./MainButton.module.css";

interface IProps {
  children: ReactNode;
  inProgress: boolean;
}

export const MainButton: FC = ({ children, inProgress }: IProps) => {
  return (
    <button className={css.Button} style={{ marginTop: 10 }}>
      {inProgress ? <Spinner /> : children}
    </button>
  );
};
