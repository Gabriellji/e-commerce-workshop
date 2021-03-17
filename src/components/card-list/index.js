import React, { useContext } from "react";

import { ApiContext } from "../../context";
import Card from "../card";
import { CardsWrapper } from './style';

const CardList = () => {
  const context = useContext(ApiContext);
  console.log(context)
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
            />
          );
        })}
    </CardsWrapper>
  );
};

export default CardList;
