import styled from "styled-components";
import { ComponentSize, heights, sidePaddings } from "../../config/sizes";
import { ButtonType } from "./button";

type StateColors = {
  regular: string;
  hover: string;
};

const typeColors: { [key in ButtonType]: StateColors } = {
  primary: {
    regular: "#0018cf",
    hover: "#2e27cc",
  },
  secondary: {
    regular: "#000",
    hover: "#3d3d3d",
  },
  danger: {
    regular: "#d93848",
    hover: "#eb4d5d",
  },
  ghost: {
    regular: "transparent",
    hover: "#dbdbdb",
  },
};

interface StyledButtonProps {
  innerType: ButtonType;
  size: ComponentSize;
  withText: boolean;
  disabled: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border: none;
  cursor: pointer;
  background-color: ${(props: StyledButtonProps) =>
    typeColors[props.innerType].regular};
  padding: 0 ${(props: StyledButtonProps) => sidePaddings[props.size]}px;
  height: ${(props: StyledButtonProps) => heights[props.size]}px;
  color: ${(props: StyledButtonProps) =>
    props.innerType === "ghost" ? typeColors["primary"].regular : "#fff"};
  ${(props: StyledButtonProps) =>
    props.disabled
      ? `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;

        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
    `
      : ""}
  border-radius: 0;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 1px #fff,
      0 0 0 2px
        ${(props: StyledButtonProps) => typeColors[props.innerType].regular};
  }
  &:hover {
    background-color: ${(props: StyledButtonProps) =>
      typeColors[props.innerType].hover};
  }
`;

export const StyledIcon = styled.div`
  height: 20px;
`;
