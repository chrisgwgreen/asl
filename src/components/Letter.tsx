import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import { isTouchDevice } from "../utils";

interface Props {
  letter: string;
  isSign: boolean;
}

const LetterWrapper = styled.div<{ isSign: boolean; isOver: boolean }>(
  (props) => {
    const { isSign, isOver } = props;

    return css`
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
      font-size: 500px;
      cursor: pointer;
      display: block;

      ${isSign &&
      css`
        font-family: sign;
      `}
      ${isSign &&
      isOver &&
      css`
        font-family: normal;
      `}

      ${!isSign &&
      css`
        font-family: normal;
      `}

      ${!isSign &&
      isOver &&
      css`
        font-family: sign;
      `}
    `;
  }
);

export const Letter = (props: Props) => {
  const { letter, isSign } = props;

  const [isOver, setIsOver] = useState(false);

  const letterWrapper = useRef<HTMLDivElement>();

  useEffect(() => {
    const letterElement = letterWrapper.current;

    const handleLetterOver = () => setIsOver(true);
    const handleLetterOut = () => setIsOver(false);
    const handleTouch = () => setIsOver(!isOver);

    if (letterElement && !isTouchDevice) {
      letterElement.addEventListener("mouseover", handleLetterOver);
      letterElement.addEventListener("mouseout", handleLetterOut);
    }

    if (letterElement && isTouchDevice) {
      letterElement.addEventListener("click", handleTouch);
    }

    return () => {
      if (letterElement && !isTouchDevice) {
        letterElement.removeEventListener("mouseover", handleLetterOver);
        letterElement.removeEventListener("mouseout", handleLetterOut);
      }

      if (letterElement && isTouchDevice) {
        letterElement.removeEventListener("click", handleTouch);
      }
    };
  }, [isOver]);

  return (
    <LetterWrapper
      isSign={isSign}
      isOver={isOver}
      ref={(ref) => {
        letterWrapper.current = ref as HTMLDivElement;
      }}
    >
      {letter}
    </LetterWrapper>
  );
};
