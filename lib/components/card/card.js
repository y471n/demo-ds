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
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { StyledCard } from "./styled";
var Card = function (props, ref) {
    var className = props.className, _a = props.width, width = _a === void 0 ? 200 : _a, _b = props.height, height = _b === void 0 ? 200 : _b, _c = props.borderRadius, borderRadius = _c === void 0 ? "none" : _c, onClick = props.onClick, children = props.children;
    return (_jsx(StyledCard, __assign({ ref: ref, className: className, width: width, height: height, borderRadius: borderRadius, onClick: onClick }, { children: children }), void 0));
};
export default React.forwardRef(Card);
//# sourceMappingURL=card.js.map