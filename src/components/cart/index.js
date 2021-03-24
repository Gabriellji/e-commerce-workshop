import React, { useState, useEffect, useContext } from "react";
import { ApiContext } from "../../context/index";
import { ReactComponent as CartLogo } from "../../assets/bag.svg";

import {
  ModalWrapper,
  StyledCart,
  StyledCartWrapper,
  LengthCart,
  QuantityLength,
} from "./style";
import CartItem from "../cart-item";

const Cart = () => {
  const context = useContext(ApiContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const getQuantity = (arr, id) => arr.filter((el) => el.uuid === id);

  const findItem = (arr, id) => arr.find((el) => el.uuid === id);

  const getTotalPrice = () => {
      if (!context.state.cart.length) {
          return 0;
      }
      let arr = [];
      context.state.cart.map(el => arr.push(el.retail_price.value));
      const result = arr.reduce((acc, val) => acc + val, 0);
      return result.toFixed(2);
  }


  const deleteItem = (e) => {
    let element = findItem(context.state.cart, e.target.id);
    const index = context.state.cart.indexOf(element);

    let copyOfItems = [...context.state.cart];
    copyOfItems.splice(index, 1);
    context.setState({
      ...context.state,
      cart: copyOfItems,
    });
  };

  const renderAddedItems = (arr) => {
    return arr
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(({ uuid, title, retail_price, url }, i) => {
        return (
          <CartItem
            key={uuid}
            img={url}
            price={retail_price.formatted_iso_value}
            title={title}
            quantity={getQuantity(context.state.cart, uuid).length}
            onClick={deleteItem}
            id={uuid}
          />
        );
      });
  };

  return (
    <>
      <StyledCart>
        <CartLogo onClick={toggleModal} />
        <QuantityLength>{context.state.cart.length}</QuantityLength>
        <ModalWrapper
          appElement={document.querySelector("#root")}
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
        >
          <StyledCartWrapper>
            {!context.state.cart.length ? (
              <h2>You have not added anything else YET.......</h2>
            ) : (
                renderAddedItems(context.state.cart)
            )}
            <div>
                <h3>CART SUBTOTAL:</h3>
                <span>$ {getTotalPrice()}</span>
            </div>
            <hr/>
            <button onClick={() => toggleModal()}>Close</button>
          </StyledCartWrapper>
        </ModalWrapper>
      </StyledCart>
    </>
  );
};

export default Cart;
