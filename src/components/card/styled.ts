import styled from "styled-components";

interface StyledCardProps {
  width: number;
  height: number;
  borderRadius: string;
}

export const StyledCard = styled.div<StyledCardProps>`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  border-radius: ${(props) => props.borderRadius}px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
