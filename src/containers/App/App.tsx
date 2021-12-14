import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { DeckLevel, DeckVariant, Language } from "../../typings";
import { shuffleArray } from "../../utils/shuffleArray";

import Box from "@mui/material/Box";
import Body from "../../components/Body/Body";
import Field from "../Field/Field";
import Header from "../../components/Header/Header";

import { labels } from "../../i18n";

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>("Ru");
  const [deckLevel, setDeckLevel] = useState<DeckLevel>("One");
  const [deckVariant, setDeckVariant] = useState<DeckVariant>("Main");

  const deck = labels[language].decks[deckVariant][deckLevel];
  const deckShuffled = shuffleArray([...deck]);

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, height: "100vh" }}>
        <Header
          language={language}
          deckLevel={deckLevel}
          deckVariant={deckVariant}
          setLanguage={setLanguage}
          setDeckLevel={setDeckLevel}
          setDeckVariant={setDeckVariant}
        />
        <Body>
          <Field
            deck={deckShuffled}
            deckLevel={deckLevel}
            language={language}
          />
        </Body>
      </Box>
    </>
  );
};

export default App;
