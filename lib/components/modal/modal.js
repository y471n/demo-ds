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
import ReactDOM from "react-dom";
import { StyledModal, StyledModalBody, StyledModalHeader, StyledModalOverlay, StyledModalWrapper, StyledModalCloseButton, } from "./styled";
var ModalCard = function (props, ref) {
    var className = props.className, _a = props.width, width = _a === void 0 ? "100vw" : _a, _b = props.height, height = _b === void 0 ? "100vh" : _b, _c = props.opacity, opacity = _c === void 0 ? 0.7 : _c, isShowing = props.isShowing, hide = props.hide, children = props.children;
    return isShowing
        ? ReactDOM.createPortal(_jsx(StyledModalOverlay, __assign({ width: width, height: height, opacity: opacity, className: className, ref: ref }, { children: _jsx(StyledModalWrapper, { children: _jsxs(StyledModal, { children: [_jsx(StyledModalHeader, { children: _jsx(StyledModalCloseButton, __assign({ onClick: hide }, { children: "x" }), void 0) }, void 0), _jsx(StyledModalBody, { children: children }, void 0)] }, void 0) }, void 0) }), void 0), document.body)
        : null;
};
export default React.forwardRef(ModalCard);
//# sourceMappingURL=modal.js.map