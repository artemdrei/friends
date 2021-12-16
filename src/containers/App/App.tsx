import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import styled, { createGlobalStyle } from "styled-components";

import { DeckLevel, DeckVariant, Language } from "../../typings";
import { shuffleArray } from "../../utils/shuffleArray";

import Body from "../../components/Body/Body";
import Field from "../Field/Field";
import Header from "../../components/Header/Header";
import ActionBar from "../../components/ActionBar/ActionBar";

import { labels } from "../../i18n";

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    height: 100%;
  }
`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: -webkit-fill-available;
  height: 100%;
`;

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>("ru");
  const [deckLevel, setDeckLevel] = useState<DeckLevel>("one");
  const [deckVariant, setDeckVariant] = useState<DeckVariant>("main");

  const deck = labels[language].decks[deckVariant][deckLevel];
  const deckShuffled = shuffleArray([...deck]);

  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <ContainerStyled>
        <Header language={language} setLanguage={setLanguage} />

        <Body>
          <Field
            deck={deckShuffled}
            deckLevel={deckLevel}
            language={language}
          />
        </Body>

        <ActionBar
          language={language}
          deckLevel={deckLevel}
          deckVariant={deckVariant}
          setDeckLevel={setDeckLevel}
          setDeckVariant={setDeckVariant}
        />
      </ContainerStyled>
    </>
  );
};

export default App;
