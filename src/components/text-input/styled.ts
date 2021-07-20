import styled from "styled-components";
import { ComponentSize, heights, sidePaddings } from "../../config/sizes";
import CrossIcon from "../../icons/Cross";

interface StyledWrapperProps {
  width: string;
  innerSize: ComponentSize;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  position: relative;
  width: ${(pr) => pr.width};
  height: ${(pr) => heights[pr.innerSize]}px;
`;

interface StyledTextInputProps {
  innerSize: ComponentSize;
  disabled: boolean;
  error: boolean;
  width: string;
  withIcon: boolean;
  withCross: boolean;
}

export const StyledTextInput = styled.input<StyledTextInputProps>`
  box-sizing: border-box;
  position: relative;
  background-color: ${(props) => (props.error ? "#ffe3e6" : "#EEEEEE")};
  padding: 0;
  padding-left: ${(props) =>
    sidePaddings[props.innerSize] +
    (props.withIcon ? sidePaddings[props.innerSize] + 10 /* icon */ : 0)}px;
  padding-right: ${(props) =>
    sidePaddings[props.innerSize] +
    (props.withCross ? sidePaddings[props.innerSize] /* cross */ : 0)}px;
  height: ${(props) => heights[props.innerSize]}px;
  width: ${(props) => props.width};
  border: none;
  color: #000;
  ${(props) =>
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
  transition: 0.1s ease-out;

  box-shadow: inset 0 0 0 2px
    ${(props) => (props.error ? "#d93848" : "transparent")};
  &:focus {
    box-shadow: inset 0 0 0 2px ${(props) => (props.error ? "#d93848" : "#000")};
  }
`;

interface StyledIconProps {
  innerSize: ComponentSize;
}

export const StyledIcon = styled.div.withConfig({
  shouldForwardProp: (prop, defPropValFN) =>
    !["innerSize"].includes(prop) && defPropValFN(prop),
})<StyledIconProps>`
  box-sizing: border-box;
  position: absolute;
  left: ${(pr) => sidePaddings[pr.innerSize]}px;
  top: 50%;
  transform: translateY(-50%);

  height: 15px;
  width: 15px;
`;

interface StyledCrossProps {
  innerSize: ComponentSize;
}

export const StyledCross = styled(CrossIcon)<StyledCrossProps>`
  box-sizing: border-box;
  position: absolute;
  right: ${(pr) => sidePaddings[pr.innerSize]}px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  height: 15px;
`;
