import Modal from 'react-modal';
import styled from 'styled-components';
import { theme } from '../../common/theme';


export const ModalWrapper = styled(Modal)`
background-color: #ececec;
position: fixed;
width: 70%;
height: 70%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

border: 1px solid #ccc;
background: #fff;
overflow: auto;
border-radius: 4px;
outline: none;
padding: 20px;
@media (max-width: ${theme.viewport.mobile}) {
  width: 90%;
  height: 90%;
}
`;

export const StyledCart = styled.div`
position: relative;
display: flex;
cursor: pointer;
gap: calc(2 * ${theme.spacer});
`;

export const StyledCartWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.cart_footer {
  width: 70%;
  margin: 2rem 0;
  .cart-inner_footer {
    width: 100%;
    padding: 3rem 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: ${theme.viewport.mobile}) {
    flex-direction: column;
    margin-bottom: ${theme.spacer};
  }
  }
}
`;

export const LengthCart = styled.span`
display: flex;
cursor: pointer;
gap: calc(2 * ${theme.spacer});
`;

export const QuantityLength = styled.div`
position: absolute;
display: flex;
justify-content: center;
right: -26px;
top: -16px;
width: 20px;
height: 20px;
background: ${theme.colors.primary};
border-radius: 50%;
`;


