import React from "react";

import Box from "@mui/material/Box";
import Body from "../components/Body/Body";
import Header from "../components/Header/Header";

const App: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Header />
      <Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus
        atque mollitia non ipsa obcaecati sed laudantium dolore ipsam eaque
        numquam adipisci eos, velit consectetur hic aliquid commodi illum.
        Maiores.
      </Body>
    </Box>
  );
};

export default App;
