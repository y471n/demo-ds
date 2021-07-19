var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { heights, sidePaddings } from "../../config/sizes";
var typeColors = {
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
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  border: none;\n  cursor: pointer;\n  background-color: ", ";\n  padding: 0 ", "px;\n  height: ", "px;\n  color: ", ";\n  ", "\n  border-radius: 0;\n  outline: none;\n  &:focus {\n    box-shadow: 0 0 0 1px #fff,\n      0 0 0 2px\n        ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  border: none;\n  cursor: pointer;\n  background-color: ", ";\n  padding: 0 ", "px;\n  height: ", "px;\n  color: ", ";\n  ", "\n  border-radius: 0;\n  outline: none;\n  &:focus {\n    box-shadow: 0 0 0 1px #fff,\n      0 0 0 2px\n        ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (props) {
    return typeColors[props.innerType].regular;
}, function (props) { return sidePaddings[props.size]; }, function (props) { return heights[props.size]; }, function (props) {
    return props.innerType === "ghost" ? typeColors["primary"].regular : "#fff";
}, function (props) {
    return props.disabled
        ? "\n        background-color: #a6a6a6;\n        color: #5e5e5e;\n        cursor: not-allowed;\n\n        &:hover {\n            background-color: #a6a6a6 !important;\n            color: #5e5e5e !important;\n        }\n    "
        : "";
}, function (props) { return typeColors[props.innerType].regular; }, function (props) {
    return typeColors[props.innerType].hover;
});
export var StyledIcon = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 20px;\n"], ["\n  height: 20px;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map