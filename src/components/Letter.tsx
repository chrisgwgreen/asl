import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import { isTouchDevice } from "../utils";

interface Props {
  letter: string;
  isSign: boolean;
  isASL: boolean;
}

const LetterWrapper = styled.div<{
  isSign: boolean;
  isOver: boolean;
  isASL: boolean;
}>((props) => {
  const { isSign, isOver, isASL } = props;

  return css`
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    top: calc(50% - 50px);
    transform: translate(-50%, -50%);
    left: 50%;
    font-size: 65vh;

    cursor: pointer;
    display: block;

    ${isSign &&
    isOver &&
    css`
      font-family: normal;
    `}

    ${!isSign &&
    css`
      font-family: normal;
    `}

    ${isSign &&
    css`
      font-family: ${isASL ? `asl` : `bsl`};
    `}

    ${!isSign &&
    isOver &&
    css`
      font-family: ${isASL ? `asl` : `bsl`};
    `}

    ${!isASL &&
    (isSign || (!isSign && isOver)) &&
    css`
      font-size: 40vh;
    `}
  `;
});

export const Letter = (props: Props) => {
  const { letter, isSign, isASL } = props;

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
      isASL={isASL}
      isOver={isOver}
      ref={(ref) => {
        letterWrapper.current = ref as HTMLDivElement;
      }}
    >
      {letter}
    </LetterWrapper>
  );
};
