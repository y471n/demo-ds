import styled from "styled-components";

interface StyledModalOverlayProps {
  width: string; // Can be px or vh
  height: string; // Can be px or vh
  opacity: number;
}

export const StyledModalOverlay = styled.div<StyledModalOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  background-color: #000;
  opacity: ${(props) => props.opacity};
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;
export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`;
export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const StyledModalBody = styled.div`
  padding: 0.5rem;
`;

// interface StyledModalCloseButtonProps {
//   fontSize: string;
//   color: string;
// }

export const StyledModalCloseButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: 0.3;
  cursor: pointer;
  border: none;
`;
