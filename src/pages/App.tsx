import React from "react";

import Box from "@mui/material/Box";
import Body from "../components/Body/Body";
import Header from "../components/Header/Header";

import Field from "../containers/Field/Field";

const App: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Header />
      <Body>
        <Field />
      </Body>
    </Box>
  );
};

export default App;
