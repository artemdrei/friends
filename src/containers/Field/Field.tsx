import React, { useState, memo, useEffect } from "react";
import styled from "styled-components";

import { Deck } from "../../typings";
import { Props } from "./types";
import { useCardsTransform } from "./useCardsTransform";

import Card from "../../components/Card/Card";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FieldStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const FieldCardsCounter = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  color: #c10016;
`;

const ButtonPrevStyled = styled(Button)`
  position: absolute;
  left: 0;
  height: 100%;
  padding-right: 20px;
  width: 50%;

  svg {
    position: absolute;
    left: 20px;
    top: calc(50% - 12px);
    transform: rotate(180deg);
  }
`;

const ButtonNextStyled = styled(Button)`
  position: absolute;
  right: 0;
  height: 100%;
  padding-right: 20px;
  width: 50%;

  svg {
    position: absolute;
    right: 20px;
    top: calc(50% - 12px);
  }
`;

export const Field: React.FC<Props> = ({ deck, deckLevel, language }) => {
  const initialCard = [deck[deck.length - 1]];
  const otherCards = deck.slice(0, -1); // slice last card

  const { cardsTransform } = useCardsTransform(deck);
  const [deckCards, setDeckCards] = useState(otherCards);
  const [fieldCards, setFieldCards] = useState(initialCard);

  useEffect(() => {
    setDeckCards(otherCards);
    setFieldCards(initialCard);
  }, [deck, deckLevel, language]);

  const updateDecks = (type: "NEXT" | "PREV", from: Deck, to: Deck) => {
    const lastCard = from[from.length - 1];

    if (!lastCard) return;

    const updatedFromCards = from.slice(0, -1); // slice last card
    const updatedToCards = [...to, lastCard]; // past sliced card in the end

    switch (type) {
      case "PREV":
        setDeckCards(updatedToCards);
        setFieldCards(updatedFromCards);

        break;

      case "NEXT":
        setDeckCards(updatedFromCards);
        setFieldCards(updatedToCards);
    }
  };

  const onNextCard = () => {
    updateDecks("NEXT", deckCards, fieldCards);
  };

  const onPrevCard = () => {
    if (fieldCards.length === 1) return;

    updateDecks("PREV", fieldCards, deckCards);
  };

  const isPrevDisabled = fieldCards.length === 0;
  const isNextDisabled = deckCards.length === 0;

  return (
    <FieldStyled>
      {fieldCards.map((text, index) => {
        return (
          <Card
            key={"card_" + index}
            text={text}
            language={language}
            transform={cardsTransform[index]}
          />
        );
      })}

      <ButtonPrevStyled onClick={onPrevCard} disabled={isPrevDisabled}>
        <ArrowForwardIosIcon />
      </ButtonPrevStyled>

      <ButtonNextStyled onClick={onNextCard} disabled={isNextDisabled}>
        <ArrowForwardIosIcon />
      </ButtonNextStyled>

      <FieldCardsCounter>
        <b>{fieldCards.length}</b> / <b>{deck.length}</b>
      </FieldCardsCounter>
    </FieldStyled>
  );
};

export default memo(Field);
