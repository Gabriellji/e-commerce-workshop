import styled from "styled-components";
import {theme} from '../../common/theme';

export const CardsWrapper = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: unset;
  @media (max-width: ${theme.viewport.tablet}) {
    width: 90%;
  }
`;
