import React, { useContext } from 'react';
import Button from "../atoms/Button";
import Cart from "../cart";
import { AuthContext } from '../../context/AuthProvider';
import { HeaderWrapper, ItemsInnerWrap, Logo, LogoWrap } from "./style";
const Header = () => {
  const context = useContext(AuthContext);
  return (
    <HeaderWrapper>
      <ItemsInnerWrap>
      <Button text="LOGOUT" action={() => context.logoutUser()}/>
        <Logo>LOGO</Logo>
        <LogoWrap>
          <Cart/>
        </LogoWrap>
      </ItemsInnerWrap>
    </HeaderWrapper>
  );
};

export default Header;
