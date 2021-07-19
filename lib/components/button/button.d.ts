import React from "react";
import { ElementType, MouseEventHandler, ReactNode } from "react";
export declare type ButtonType = "primary" | "secondary" | "danger" | "ghost";
export declare type ComponentSize = "default" | "large" | "small";
interface BaseButtonProps {
    type?: ButtonType;
    icon?: ElementType;
    size?: ComponentSize;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
}
declare type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;
export declare type ButtonProps = HTMLButtonProps;
declare const _default: React.ForwardRefExoticComponent<{
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & BaseButtonProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=button.d.ts.map