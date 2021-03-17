import styled from 'styled-components';
import { theme } from '../../common/theme';

export const SingleCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 600px;
  justify-content: space-around;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 14px;
  text-align: center;
  .price {
    color: green;
  }
  span {
    margin-right: ${theme.spacer_light};
    color: red;
  }
  .price, span {
    font-size: 18px;
  }
  background-color: ${theme.colors.light};
  border-radius: ${theme.spacer};
  @media (max-width: ${theme.viewport.tablet}) {
    padding: ${theme.spacer_light};
    width: 45%;
  }
  @media (max-width: ${theme.viewport.mobile}) {
    width: 90%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.viewport.tablet}) {
    padding: ${theme.spacer_light};
  }
`;

export const PriceSpan = styled.span`
  text-decoration: line-through;
`;

