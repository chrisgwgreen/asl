import React, { ReactNode } from "react";
import styled, { css } from "styled-components/macro";
import { useIsTabletViewport } from "../hooks";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const ButtonWrapper = styled.button<{ isTabletViewport: boolean }>((props) => {
  const { isTabletViewport } = props;

  return css`
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

    ${isTabletViewport &&
    css`
      font-size: 1.5rem;
    `}
  `;
});

export const Button = (props: Props) => {
  const { children, onClick } = props;

  const isTabletViewport = useIsTabletViewport();

  const handleClick = () => {
    onClick();

    // @ts-ignore
    document.activeElement.blur();
  };

  return (
    <ButtonWrapper onClick={handleClick} isTabletViewport={isTabletViewport}>
      {children}
    </ButtonWrapper>
  );
};
