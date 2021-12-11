import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  z-index: 1;
  position: relative;
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
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const TextStyled = styled.div`
  width: 100%;
  text-align: center;
`;

export const Card: React.FC = ({ children }) => {
  return (
    <CardStyled>
      <TextStyled>{children}</TextStyled>
    </CardStyled>
  );
};

export default Card;
