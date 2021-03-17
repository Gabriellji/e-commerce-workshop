import { ButtonWrapper, PriceSpan, SingleCard } from './style';

const Card = ({ title, description, cover_image_url, retail_price, uuid }) => {
  return (
    <SingleCard>
      <img src={cover_image_url} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{retail_price}</p>
      <ButtonWrapper>
      <button id={uuid}>Add to cart</button>
      <button id={uuid}>Add to wishlist</button>
      </ButtonWrapper>
    </SingleCard>
  );
};

export default Card;
