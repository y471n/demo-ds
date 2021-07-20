import React from "react";
import ReactDOM from "react-dom";
import {
  StyledModal,
  StyledModalBody,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalWrapper,
  StyledModalCloseButton,
} from "./styled";

export type BaseModalProps = {
  width?: string;
  height?: string;
  display?: string;
  opacity?: number;
  className?: string;
  isShowing: boolean;
  hide: () => void;
  children: React.ReactNode;
};

const ModalCard: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BaseModalProps
> = (props, ref) => {
  const {
    className,
    width = "100vw",
    height = "100vh",
    opacity = 0.7,
    isShowing,
    hide,
    children,
  } = props;

  return isShowing
    ? ReactDOM.createPortal(
        <StyledModalOverlay
          width={width}
          height={height}
          opacity={opacity}
          className={className}
          ref={ref}
        >
          <StyledModalWrapper>
            <StyledModal>
              <StyledModalHeader>
                <StyledModalCloseButton onClick={hide}>
                  x
                </StyledModalCloseButton>
              </StyledModalHeader>
              <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
          </StyledModalWrapper>
        </StyledModalOverlay>,
        document.body
      )
    : null;
};

export default React.forwardRef<HTMLDivElement, BaseModalProps>(ModalCard);
