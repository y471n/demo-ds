import styled from "styled-components";

interface StyledSkeletonProps {
  width: number;
  height: number;
  borderRadius: string;
}

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: #e8e8e8;
  border-radius: ${(props) => props.borderRadius};

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: -${(props) => props.width}px;
    top: 0;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    background-color: #cccccc;
    animation: load 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation-iteration-count: infinite;
  }

  @keyframes load {
    from {
      left: -${(props) => props.width}px;
    }
    to {
      left: 100%;
    }
  }
`;
