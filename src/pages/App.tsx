import React from "react";

import { shuffleArray } from "../utils/shuffleArray";

import Box from "@mui/material/Box";
import Body from "../components/Body/Body";
import Field from "../containers/Field/Field";
import Header from "../components/Header/Header";

import { labels } from "../i18n";

const App: React.FC = () => {
  const deck = labels.en.decks.main.one;
  const deckShuffled = shuffleArray([...deck]);

  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Header />
      <Body>
        <Field deck={deckShuffled} />
      </Body>
    </Box>
  );
};

export default App;
