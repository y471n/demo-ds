import React, { MouseEventHandler } from "react";
import { StyledCard } from "./styled";

export type BaseCardProps = {
  width?: number;
  height?: number;
  className?: string;
  borderRadius: string;
  children?: React.ReactNode;
};

export type CardProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
} & BaseCardProps;

const Card: React.ForwardRefRenderFunction<HTMLDivElement, CardProps> = (
  props,
  ref
) => {
  const {
    className,
    width = 200,
    height = 200,
    borderRadius = "none",
    onClick,
    children,
  } = props;

  return (
    <StyledCard
      ref={ref}
      className={className}
      width={width}
      height={height}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {children}
    </StyledCard>
  );
};

export default React.forwardRef<HTMLDivElement, CardProps>(Card);
