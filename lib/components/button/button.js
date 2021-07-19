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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { StyledIcon, StyledButton } from "./styled";
var Button = function (props, ref) {
    var _a = props.type, type = _a === void 0 ? "primary" : _a, icon = props.icon, _b = props.size, size = _b === void 0 ? "default" : _b, className = props.className, children = props.children, _c = props.disabled, disabled = _c === void 0 ? false : _c, loading = props.loading, onClick = props.onClick;
    var styles = {
        innerType: type,
        size: size,
        disabled: disabled,
        withText: children != null,
    };
    var childrenWithIcon = !icon ? (children) : (_jsxs(_Fragment, { children: [children, _jsx(StyledIcon, { as: icon }, void 0)] }, void 0));
    return (_jsx(StyledButton, __assign({ as: "button", type: "button", onClick: onClick, ref: ref, className: className }, styles, { children: loading ? _jsx(_Fragment, { children: "Loading..." }, void 0) : childrenWithIcon }), void 0));
};
export default React.forwardRef(Button);
//# sourceMappingURL=button.js.map