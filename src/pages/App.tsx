import React from "react";

import Box from "@mui/material/Box";
import Header from "../components/Header/Header";

const App: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Header />
    </Box>
  );
};

export default App;
