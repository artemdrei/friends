import React from "react";
import styled from "styled-components";

import { Props } from "./types";

import AppBar from "@mui/material/AppBar";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import { labels } from "../../i18n";
import { DeckLevel, DeckVariant, Language } from "../../typings";

const ContainerStyled = styled(Container)`
  padding: 0;
`;

const Header: React.FC<Props> = ({
  language,
  deckLevel,
  deckVariant,
  setLanguage,
  setDeckLevel,
  setDeckVariant,
}) => {
  const ID = {
    LANGUAGE: "language",
    DECK_LEVEL: "deckLevel",
    DECK_VARIANT: "deckVariant",
  };

  const label = labels[language].decks;
  const labelCommon = labels[language].common;
  const levelOptions = Object.keys(label[deckVariant]).map(
    (variant) => variant
  ) as DeckLevel[];
  const variantOptions = Object.keys(label).map(
    (deck) => deck
  ) as DeckVariant[];
  const languagesOptions = Object.keys(labels).map(
    (language) => language
  ) as Language[];

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    switch (name) {
      case ID.LANGUAGE:
        setLanguage(value);

        break;

      case ID.DECK_LEVEL:
        setDeckLevel(value);

        break;

      case ID.DECK_VARIANT:
        setDeckVariant(value);

        break;
    }
  };

  return (
    <AppBar position="relative">
      <ContainerStyled maxWidth="md">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex" }}
          >
            <SentimentSatisfiedAltIcon
              style={{ width: "32px", height: "32px" }}
            />
          </Typography>

          <FormControl sx={{ m: 1, width: 120 }}>
            <Select
              name={ID.DECK_VARIANT}
              value={deckVariant}
              onChange={handleChange}
              renderValue={(selected) => selected}
            >
              {variantOptions.map((name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={labelCommon.decks[name]} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: 80 }}>
            <Select
              name={ID.DECK_LEVEL}
              value={deckLevel}
              onChange={handleChange}
              renderValue={(selected) => selected}
            >
              {levelOptions.map((name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={labelCommon.levels[name]} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: 80 }}>
            <Select
              name={ID.LANGUAGE}
              value={language}
              onChange={handleChange}
              renderValue={(selected) => selected}
            >
              {languagesOptions.map((name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={labelCommon.languages[name]} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Toolbar>
      </ContainerStyled>
    </AppBar>
  );
};

export default Header;
