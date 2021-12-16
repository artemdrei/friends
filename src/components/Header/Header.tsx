import React from "react";
import styled from "styled-components";

import { Props } from "./types";
import { Language } from "../../typings";

import AppBar from "@mui/material/AppBar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import { ReactComponent as LogoIcon } from "../../assets/svg/friends.svg";

import { labels } from "../../i18n";

const ContainerStyled = styled(Container)`
  padding: 0;
`;

const LogoIconStyled = styled(LogoIcon)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Header: React.FC<Props> = ({ language, setLanguage }) => {
  const ID = {
    LANGUAGE: "language",
    DECK_LEVEL: "deckLevel",
    DECK_VARIANT: "deckVariant",
  };

  const labelCommon = labels[language].common;

  const languagesOptions = Object.keys(labels).map(
    (language) => language
  ) as Language[];

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    switch (name) {
      case ID.LANGUAGE:
        setLanguage(value);

        break;
    }
  };

  return (
    <AppBar position="relative">
      <ContainerStyled
        maxWidth="md"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 16px",
        }}
      >
        <LogoIconStyled />

        <FormControl sx={{ width: 90 }}>
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
      </ContainerStyled>
    </AppBar>
  );
};

export default Header;
