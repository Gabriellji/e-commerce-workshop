import React, { useContext, useEffect } from "react";
import { ApiContext } from "../../context/index";
import { getPagingRange, lengthPerPage, maxOffset } from "../../helpers";
import Button from "../atoms/Button";
import { PagesBtnWrapper, StyledSpan } from "./style";

const Panel = () => {
  const context = useContext(ApiContext);

  const clickHangler = (e) => {
      console.log(context.diana)
    if (e.target.innerText === "Prev") {
      context.setOffset(context.offset - 1);
      return;
    }
    if (e.target.innerText === "Next") {
      context.setOffset(context.offset + 1);
      return;
    }
    const offset = e.target.innerText;
    context.setOffset(Number(offset));
  };

  useEffect(() => {
    context.getData(context.offset);
  }, [context.offset]);

  return (
    <PagesBtnWrapper>
      {context.offset > 1 && (
        <Button
          id="Next"
          key={"Prev"}
          text="Prev"
          action={(e) => clickHangler(e)}
        />
      )}
      {context.offset > lengthPerPage && (
        <>
          <Button action={(e) => clickHangler(e)} text={1} />
          <StyledSpan>....</StyledSpan>
        </>
      )}
      <div>
        {getPagingRange(context.offset).map((el, i) => (
          <Button key={i} action={(e) => clickHangler(e)} text={`${el}`} />
        ))}
      </div>

      {context.offset < maxOffset - 2 && (
        <>
          <StyledSpan>....</StyledSpan>
          <Button action={(e) => clickHangler(e)} text={maxOffset} />
          <Button
            id="Next"
            key={"Next"}
            text={"Next"}
            action={(e) => clickHangler(e)}
          />
        </>
      )}
    </PagesBtnWrapper>
  );
};

export default Panel;
