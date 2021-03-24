import Cart from "../cart";
import { HeaderWrapper, ItemsInnerWrap, Logo, LogoWrap } from "./style";
const Header = () => {
  return (
    <HeaderWrapper>
      <ItemsInnerWrap>
        <Logo>LOGO</Logo>
        <LogoWrap>
          <Cart/>
        </LogoWrap>
      </ItemsInnerWrap>
    </HeaderWrapper>
  );
};

export default Header;
