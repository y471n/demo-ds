import React, { MouseEventHandler } from "react";
import { StyledMain, StyledFooter, StyledWeatherCard } from "./styled";

export type BaseWeatherCardProps = {
  width?: number;
  height?: number;
  className?: string;
  borderRadius: string;
  main: React.ReactNode;
  footer: React.ReactNode;
};

type WeatherCardProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
} & BaseWeatherCardProps;

const WeatherCard: React.ForwardRefRenderFunction<
  HTMLDivElement,
  WeatherCardProps
> = (props, ref) => {
  const {
    className,
    width = 300,
    height = 300,
    borderRadius = "none",
    main,
    footer,
    onClick,
  } = props;

  return (
    <StyledWeatherCard
      width={width}
      height={height}
      borderRadius={borderRadius}
      className={className}
      onClick={onClick}
    >
      <StyledMain>{main}</StyledMain>
      <StyledFooter>{footer}</StyledFooter>
    </StyledWeatherCard>
  );
};

export default React.forwardRef<HTMLDivElement, WeatherCardProps>(WeatherCard);
