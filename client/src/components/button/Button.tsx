import { FC } from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import cn from "classnames";
import { isEqual } from "lodash";
import styles from "./Button.module.scss";

type ButtonProps = {
  active?: boolean;
  className?: string;
  label: string;
  onClick?: () => void;
  size?: "sm" | "lg";
  type?: "link";
};

export const Button: FC<ButtonProps> = ({
  active,
  className,
  label,
  onClick,
  size = "sm",
  type,
}) => {
  const getClassName = () => {
    if (isEqual(type, "link")) {
      if (active) return styles.activeLinkButton;
      return styles.linkButton;
    }
    return "";
  };

  return (
    <BootstrapButton
      {...{
        className: cn(className, getClassName()),
        onClick,
        shadow: "sm",
        variant: "link",
        size,
        ...(!type && { variant: "outline-dark" }),
      }}
    >
      {label}
    </BootstrapButton>
  );
};
