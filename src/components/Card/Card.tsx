import React, { memo } from "react";
import styled from "styled-components";

import { Props } from "./types";

const CardStyled = styled.div<{ transform: string }>`
  z-index: 1;
  position: absolute;
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%;
  max-width: 480px;
  height: 330px;
  padding: 12px 24px;
  border-radius: 60px;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #c10016;
  background-color: #f6f6f6;
  transform: ${({ transform }) => transform};
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const TextStyled = styled.div`
  width: 100%;
  text-align: center;
`;

export const Card: React.FC<Props> = ({ children, transform }) => {
  return (
    <CardStyled transform={transform}>
      <TextStyled>{children}</TextStyled>
    </CardStyled>
  );
};

export default memo(Card);
