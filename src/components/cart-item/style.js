import { theme } from '../../common/theme';
import styled from 'styled-components';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export const StyledCartItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  gap: ${theme.spacer};
  font-size: ${theme.fonts.sizes.XS};
  padding: ${theme.spacer};
  p {
    font-size: 15px;
  }
  /* animation */
  transition: ${theme.transition};
  :hover {
    background-color: ${theme.colors.grey};
    box-shadow: 0px 0px ${theme.spacer} 0px ${theme.colors.shadow};
  }
  @media (max-width: ${theme.viewport.mobile}) {
    width: 90%;
    flex-direction: column;
    text-align: center;
    margin: 10px 0;
    padding: 2rem 0 0;
  }
`;

export const StyledImage = styled.div`
  width: 100px;
  height: 100px;
  min-width: 100px;
  min-height: 100px;
  display: flex;
  background: red;
`;

export const StyledText = styled.h2`
  font-size: ${theme.fonts.sizes.S};
  margin-bottom: 10px;
`;

export const CloseIcon = styled(IoIosCloseCircleOutline)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const TextWrap = styled.div`
  padding: 2rem 0;
`;
