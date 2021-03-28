import React from "react";
import styled from "styled-components";
import { theme } from "../../common/theme";

export const StyledBtn = styled.button`
  width: ${(p) => (p.width === "parent" ? "100%" : "auto")};
  width: ${(p) => p.width==="auto" && "80vw"};
  height: 40px;
  margin: ${theme.spacer_light};
  color: ${(p) =>
    p.color === "primary"
      ? theme.colors.primary
      : p.color === "light"
      ? theme.colors.light
      : theme.colors.dark};
  font-size: 20px;
  padding: 0
    ${(p) =>
      p.size === "S"
        ? theme.spacer
        : p.size === "M"
        ? `calc(2 * ${theme.spacer})`
        : p.size === "L"
        ? `calc(3 * ${theme.spacer})`
        : `calc(4 * ${theme.spacer})`};
  background-color: ${theme.colors.secondary};
  border-radius: ${(p) =>
    p.size === "S"
      ? theme.spacer
      : p.size === "M"
      ? `calc(2 * ${theme.spacer})`
      : p.size === "L"
      ? `calc(3 * ${theme.spacer})`
      : `calc(4 * ${theme.spacer})`};
  border: 1px solid ${theme.colors.primary};
  @media (min-width:${theme.viewport.tablet}) {
    width: ${(p) => p.width==="auto" && "50vw"};
  }
  @media (max-width: 1140px) {
    font-size: 15px;
  }
  /* animation */
  transition: ${theme.transition};
  :hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.light};
    cursor: pointer;
    box-shadow: inset 0px 0px ${theme.spacer} 0px ${theme.colors.shadow};
  }
`;

const Button = ({
    id,
    action,
    size,
    color,
    width,
    height,
    text,
  }) => (
    <StyledBtn
      {...[size, color, width, height]}
      id={id}
      onClick={action}
      size={size}
      color={color}
      width={width}
      height={height}
    >
      {text}
    </StyledBtn>
  );
  
  export default Button;