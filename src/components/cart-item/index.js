import {
  StyledCartItem,
  StyledImage,
  StyledText,
  CloseIcon,
  TextWrap,
} from "./style";

const CartItem = ({ id, title, price, quantity, onClick }) => {
  return (
    <StyledCartItem id={id}>
      <StyledImage />
      <TextWrap>
        <StyledText>{title}</StyledText>
        <p>
          <span>{`${quantity} X`}</span>
          {price}
        </p>
      </TextWrap>
      <CloseIcon id={id} onClick={(e) => onClick(e)} />
    </StyledCartItem>
  );
};

export default CartItem;
