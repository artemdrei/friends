import React, { useState } from "react";
import styled from "styled-components";

import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "../../components/Card/Card";

import { shuffleArray } from "../../utils/shuffleArray";

const FieldStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px solid red;
`;

const ButtonPrevStyled = styled(Button)`
  position: absolute;
  left: 0;
  height: 100%;
  padding-right: 20px;
  width: 50%;
  z-index: 1;

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
  z-index: 1;

  svg {
    position: absolute;
    right: 20px;
    top: calc(50% - 12px);
  }
`;

const deck = ["one", "two", "tree", "four", "five"];
const deckShuffled = shuffleArray([...deck]);

export const Field: React.FC = () => {
  const initialCard = [deckShuffled[deckShuffled.length - 1]];
  const otherCards = deckShuffled.slice(0, -1); // slice last card

  const [deckCards, setDeckCards] = useState(otherCards);
  const [fieldCards, setFieldCards] = useState(initialCard);

  console.log("deckCards", deckCards);
  console.log("fieldCards", fieldCards);

  const updateDecks = (type: "NEXT" | "PREV", from: string[], to: string[]) => {
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
    updateDecks("PREV", fieldCards, deckCards);
  };

  return (
    <FieldStyled>
      <ButtonPrevStyled disableRipple onClick={onPrevCard}>
        <ArrowForwardIosIcon />
      </ButtonPrevStyled>

      <ButtonNextStyled disableRipple onClick={onNextCard}>
        <ArrowForwardIosIcon />
      </ButtonNextStyled>

      {fieldCards.map((item) => {
        return <Card key={item}>{item}</Card>;
      })}
    </FieldStyled>
  );
};

export default Field;
