var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { heights, sidePaddings } from "../../config/sizes";
import CrossIcon from "../../icons/Cross";
export var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: ", ";\n  height: ", "px;\n"], ["\n  position: relative;\n  width: ", ";\n  height: ", "px;\n"])), function (pr) { return pr.width; }, function (pr) { return heights[pr.innerSize]; });
export var StyledTextInput = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: relative;\n  background-color: ", ";\n  padding: 0;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  height: ", "px;\n  width: ", ";\n  border: none;\n  color: #000;\n  ", "\n  border-radius: 0;\n  outline: none;\n  transition: 0.1s ease-out;\n\n  box-shadow: inset 0 0 0 2px\n    ", ";\n  &:focus {\n    box-shadow: inset 0 0 0 2px ", ";\n  }\n"], ["\n  box-sizing: border-box;\n  position: relative;\n  background-color: ", ";\n  padding: 0;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  height: ", "px;\n  width: ", ";\n  border: none;\n  color: #000;\n  ", "\n  border-radius: 0;\n  outline: none;\n  transition: 0.1s ease-out;\n\n  box-shadow: inset 0 0 0 2px\n    ", ";\n  &:focus {\n    box-shadow: inset 0 0 0 2px ", ";\n  }\n"])), function (props) { return (props.error ? "#ffe3e6" : "#EEEEEE"); }, function (props) {
    return sidePaddings[props.innerSize] +
        (props.withIcon ? sidePaddings[props.innerSize] + 10 /* icon */ : 0);
}, function (props) {
    return sidePaddings[props.innerSize] +
        (props.withCross ? sidePaddings[props.innerSize] /* cross */ : 0);
}, function (props) { return heights[props.innerSize]; }, function (props) { return props.width; }, function (props) {
    return props.disabled
        ? "\n    background-color: #a6a6a6;\n    color: #5e5e5e;\n    cursor: not-allowed;\n    \n    &:hover {\n        background-color: #a6a6a6 !important;\n        color: #5e5e5e !important;\n    }\n    "
        : "";
}, function (props) { return (props.error ? "#d93848" : "transparent"); }, function (props) { return (props.error ? "#d93848" : "#000"); });
export var StyledIcon = styled.div.withConfig({
    shouldForwardProp: function (prop, defPropValFN) {
        return !["innerSize"].includes(prop) && defPropValFN(prop);
    },
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: absolute;\n  left: ", "px;\n  top: 50%;\n  transform: translateY(-50%);\n\n  height: 15px;\n  width: 15px;\n"], ["\n  box-sizing: border-box;\n  position: absolute;\n  left: ", "px;\n  top: 50%;\n  transform: translateY(-50%);\n\n  height: 15px;\n  width: 15px;\n"])), function (pr) { return sidePaddings[pr.innerSize]; });
export var StyledCross = styled(CrossIcon)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: absolute;\n  right: ", "px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n\n  height: 15px;\n"], ["\n  box-sizing: border-box;\n  position: absolute;\n  right: ", "px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n\n  height: 15px;\n"])), function (pr) { return sidePaddings[pr.innerSize]; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map