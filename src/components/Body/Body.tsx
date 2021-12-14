import React from "react";
import styled from "styled-components";

import { Container } from "@mui/material";

const ContainerStyled = styled(Container)`
  height: calc(100vh - 64px);
  overflow-y: auto;
  padding: 0 24px;
`;

const Body: React.FC = ({ children }) => {
  return <ContainerStyled maxWidth="md">{children}</ContainerStyled>;
};

export default Body;
