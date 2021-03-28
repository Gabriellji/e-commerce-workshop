import { theme } from '../../common/theme';
import styled from 'styled-components';

export const PagesBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${theme.viewport.mobile}) {
    button {
      width: 30px;
      font-size: 15px;
      align-items: center;
      text-align: center;
      margin: 5px;
      padding: 10px;
    }
    #Prev, #Next {
        display: none;
    }
  }
`;

export const StyledSpan = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  @media (min-width: ${theme.viewport.tablet}) {
  }
`;
