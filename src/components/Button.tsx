import React, { ReactNode } from "react";
import styled from "styled-components/macro";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const ButtonWrapper = styled.button`
  padding: 1rem 2rem;
  font-size: 2rem;
  font-family: normal;
  outline: none;
  border: none;
  background: #83af9b;
  cursor: pointer;

  :hover {
    background: #c8c8a9;
  }
`;

export const Button = (props: Props) => {
  const { children, onClick } = props;

  const handleClick = () => {
    onClick();

    // @ts-ignore
    document.activeElement.blur();
  };

  return <ButtonWrapper onClick={handleClick}>{children}</ButtonWrapper>;
};
