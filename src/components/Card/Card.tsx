import React, { memo } from "react";
import styled from "styled-components";

import { Props } from "./types";

const CardStyled = styled.div<{ transform: string; isWildCard: boolean }>`
  z-index: 1;
  position: absolute;
  display: flex;
  text-align: center;
  align-items: center;
  width: calc(100% - 40px);
  max-width: 480px;
  min-height: 270px;
  padding: 12px 24px;
  border-radius: 60px;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: ${({ isWildCard }) => (isWildCard ? "#fff" : "#c10016")};
  background-color: ${({ isWildCard }) => (isWildCard ? "#c10016" : "#f6f6f6")};
  transform: ${({ transform }) => transform};
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const TextStyled = styled.div`
  width: 100%;
  text-align: center;
`;

export const Card: React.FC<Props> = ({ text, transform }) => {
  const isWildCard = text.includes("Wild Card");
  const content = isWildCard ? text.replace(/Wild Card/gi, "").trim() : text;

  return (
    <CardStyled transform={transform} isWildCard={isWildCard}>
      <TextStyled>{content}</TextStyled>
    </CardStyled>
  );
};

export default memo(Card);
