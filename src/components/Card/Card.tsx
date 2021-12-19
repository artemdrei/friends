import React, { memo } from "react";
import styled, { keyframes } from "styled-components";

import { Props } from "./types";

import { labels } from "../../i18n";

const slideDown = keyframes`
  from {
    opacity: 0;
      transform: translate3d(0, -100%, 0);
      visibility: hidden;
    }

    to {
      opacity: 1;
      visibility: visible;
      transform: translate3d(0, 0, 0);
    }
`;

const CardWrapper = styled.div`
  z-index: 1;
  position: absolute;
  width: calc(100% - 40px);
  max-width: 480px;
  min-height: 270px;
  margin-top: -80px;
  animation: ${slideDown} 160ms ease-out;
`;

const CardStyled = styled.div<{ transform: string; isWildCard: boolean }>`
  position: absolute;
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 12px 24px;
  border-radius: 60px;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;
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

export const Card: React.FC<Props> = ({ text, language, transform }) => {
  const isWildCard = text?.includes("Wild Card");
  const content = isWildCard ? text.replace(/Wild Card/gi, "").trim() : text;

  return (
    <CardWrapper>
      <CardStyled transform={transform} isWildCard={isWildCard}>
        {content ? (
          <TextStyled>{content}</TextStyled>
        ) : (
          <TextStyled>{labels[language].common.decks.noTranslation}</TextStyled>
        )}
      </CardStyled>
    </CardWrapper>
  );
};

export default memo(Card);
