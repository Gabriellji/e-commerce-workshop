import React, { useContext } from "react";

import { ApiContext } from "../../context";
import Card from "../card";
import { CardsWrapper } from "./style";

const CardList = () => {
  const context = useContext(ApiContext);

  const clickHandler = (e) => {
    if (e.target.innerText === "Add to cart") {
      const item = context.state.data.data.find(
        (el) => el.uuid === e.target.id
      );
      let copyOfItems = [...context.state.cart];
      copyOfItems.push(item);
      context.setState({
        ...context.state,
        cart: copyOfItems,
      });
    } else {
      const item = context.state.data.data.find(
        (el) => el.uuid === e.target.id
      );
      let copyOfItems = [...context.state.wishlist];
      copyOfItems.push(item);
      context.setState({
        ...context.state,
        wishlist: copyOfItems,
      });
    }
  };

  return (
    <CardsWrapper>
      {context.state.isLoaded &&
        context.state.data.data.map((el) => {
          return (
            <Card
              key={el.uuid}
              id={el.uuid}
              title={el.title}
              description={el.description}
              cover_image_url={el.cover_image_url}
              retail_price={el.retail_price.formatted_iso_value}
              onClick={clickHandler}
            />
          );
        })}
    </CardsWrapper>
  );
};

export default CardList;

