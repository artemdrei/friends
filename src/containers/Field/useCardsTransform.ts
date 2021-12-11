import { useState, useEffect } from "react";

import { Deck } from "../../typings";
import { getRandomInt } from "../../utils/getRandomInt";

export const useCardsTransform = (deck: Deck) => {
  const [cardsTransform, setCardsTransform] = useState<string[]>([]);

  useEffect(() => {
    const transform = deck.map((_, i) => {
      if (i === 0) {
        return `rotate($0deg) translate(0px, 0px)`;
      }

      const rotate = getRandomInt(-10, 10);
      const translateX = getRandomInt(-8, 10);
      const translateY = getRandomInt(-8, 10);

      return `rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`;
    });

    setCardsTransform(transform);
  }, [deck]);

  return { cardsTransform };
};
