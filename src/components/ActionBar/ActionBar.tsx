import React from "react";
import styled from "styled-components";

import { Props } from "./types";
import { DeckLevel, DeckVariant } from "../../typings";

import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";

import { labels } from "../../i18n";

const ContainerStyled = styled(Container)`
  padding: 12px 24px;
`;

const ActionBar: React.FC<Props> = ({
  language,
  deckLevel,
  deckVariant,
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

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    switch (name) {
      case ID.DECK_LEVEL:
        setDeckLevel(value);

        break;

      case ID.DECK_VARIANT:
        setDeckVariant(value);

        break;
    }
  };

  return (
    <Paper elevation={5}>
      <ContainerStyled
        maxWidth="md"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <FormControl sx={{ minWidth: 130, maxWidth: 240, width: "48%" }}>
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

        <FormControl sx={{ minWidth: 130, maxWidth: 240, width: "48%" }}>
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
      </ContainerStyled>
    </Paper>
  );
};

export default ActionBar;
