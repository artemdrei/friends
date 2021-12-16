import React from "react";
import styled from "styled-components";

import { Container } from "@mui/material";

const ContainerStyled = styled(Container)`
  overflow-y: auto;
  height: 100%;
  padding: 0 !important;
`;

const Body: React.FC = ({ children }) => {
  return <ContainerStyled maxWidth="md">{children}</ContainerStyled>;
};

export default Body;
