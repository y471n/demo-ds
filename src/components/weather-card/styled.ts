import styled from "styled-components";
import Card from "../card";

export const StyledWeatherCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

export const StyledMain = styled.div`
  flex-basis: 30%;
  border-bottom: 1px solid #d7d7d7;
  padding: 0.5rem;
`;

export const StyledFooter = styled.div`
  padding: 0.5rem;
`;
