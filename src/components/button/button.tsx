import React from "react";
import { ElementType, MouseEventHandler, ReactNode } from "react";
import { StyledIcon, StyledButton } from "./styled";

export type ButtonType = "primary" | "secondary" | "danger" | "ghost";

export type ComponentSize = "default" | "large" | "small";

interface BaseButtonProps {
  type?: ButtonType;
  icon?: ElementType;
  size?: ComponentSize;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

type HTMLButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;

export type ButtonProps = HTMLButtonProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref
) => {
  const {
    type = "primary",
    icon,
    size = "default",
    className,
    children,
    disabled = false,
    loading,
    onClick,
  } = props;

  const styles = {
    innerType: type,
    size,
    disabled,
    withText: children != null,
  };

  const childrenWithIcon = !icon ? (
    children
  ) : (
    <>
      {children}
      <StyledIcon as={icon} />
    </>
  );

  return (
    <StyledButton
      as="button"
      type="button"
      onClick={onClick}
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
      className={className}
      {...styles}
    >
      {loading ? <>Loading...</> : childrenWithIcon}
    </StyledButton>
  );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
