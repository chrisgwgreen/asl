import React, { ReactNode } from "react";
import styled, { css } from "styled-components/macro";
import Color from "color";
import { useIsTabletViewport } from "../hooks";

interface Props {
  children: ReactNode;
  color?: string;
  onClick: () => void;
}

const ButtonWrapper = styled.button<{
  isTabletViewport: boolean;
  color?: string;
}>((props) => {
  const { isTabletViewport, color = "#83af9b" } = props;

  const bgColor = Color(color);

  return css`
    padding: 1rem 2rem;
    font-size: 2rem;
    font-family: normal;
    outline: none;
    border: none;
    background: ${bgColor.toString()};
    cursor: pointer;

    :hover,
    :focus {
      background: ${bgColor.darken(0.2).toString()};
    }

    ${isTabletViewport &&
    css`
      font-size: 1.5rem;
    `}
  `;
});

export const Button = (props: Props) => {
  const { children, onClick, color } = props;

  const isTabletViewport = useIsTabletViewport();

  return (
    <ButtonWrapper
      onClick={onClick}
      isTabletViewport={isTabletViewport}
      color={color}
    >
      {children}
    </ButtonWrapper>
  );
};
