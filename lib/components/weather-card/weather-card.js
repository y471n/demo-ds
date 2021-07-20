var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { StyledMain, StyledFooter, StyledWeatherCard } from "./styled";
var WeatherCard = function (props, ref) {
    var className = props.className, _a = props.width, width = _a === void 0 ? 300 : _a, _b = props.height, height = _b === void 0 ? 300 : _b, _c = props.borderRadius, borderRadius = _c === void 0 ? "none" : _c, main = props.main, footer = props.footer, onClick = props.onClick;
    return (_jsxs(StyledWeatherCard, __assign({ width: width, height: height, borderRadius: borderRadius, className: className, onClick: onClick }, { children: [_jsx(StyledMain, { children: main }, void 0), _jsx(StyledFooter, { children: footer }, void 0)] }), void 0));
};
export default React.forwardRef(WeatherCard);
//# sourceMappingURL=weather-card.js.map