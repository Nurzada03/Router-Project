import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  padding: 10px;
  width: 140px;
  background-color: #19ae9f;
  border-radius: 20px;
  border: 0px solid;
  color: white;
  font-size: 23px;
  font-weight: bold;
`;
