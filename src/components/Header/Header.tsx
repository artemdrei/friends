import React from "react";

import AppBar from "@mui/material/AppBar";
import { Button, Container, Toolbar, Typography } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const Header: React.FC = () => {
  return (
    <AppBar>
      <Container maxWidth="lg">
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
      </Container>
    </AppBar>
  );
};

export default Header;
