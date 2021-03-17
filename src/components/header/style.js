import styled from 'styled-components';
import {theme} from '../../common/theme';

export const HeaderWrapper = styled.div`
  display: flex;
  padding: ${theme.spacer};
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: ${theme.colors.light};
  @media (min-width: ${theme.viewport.tablet}) {
  }
`;

export const ItemsInnerWrap = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${theme.colors.light};
`;

export const LogoWrap = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  background-color: ${theme.colors.light};
`;

export const Logo = styled.div`
  display: flex;
`;