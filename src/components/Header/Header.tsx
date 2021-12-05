import React from "react";
import styled from "styled-components";

import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

const ContainerStyled = styled(Container)`
  padding: 0;
`;

const Header: React.FC = () => {
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
          <Button color="inherit" variant="outlined">
            Level
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            style={{ marginLeft: "16px" }}
          >
            Cards
          </Button>
        </Toolbar>
      </ContainerStyled>
    </AppBar>
  );
};

export default Header;
