import { ButtonWrapper, PriceSpan, SingleCard } from "./style";

const Card = ({
  title,
  description,
  cover_image_url,
  retail_price,
  onClick,
  id,
}) => {
  return (
    <SingleCard >
      <img src={cover_image_url} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{retail_price}</p>
      <ButtonWrapper>
        <button id={id} onClick={(e) => onClick(e)}>
          Add to cart
        </button>
        <button id={id} onClick={(e) => onClick(e)}>
          Add to wishlist
        </button>
      </ButtonWrapper>
    </SingleCard>
  );
};

export default Card;
