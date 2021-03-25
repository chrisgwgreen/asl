import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import { language } from "../types";
import { isTouchDevice } from "../utils";

interface Props {
  letter: string;
  isSign: boolean;
  language: language;
}

const LetterWrapper = styled.div<{
  isSign: boolean;
  isOver: boolean;
  language: language;
}>((props) => {
  const { isSign, isOver, language } = props;

  return css`
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    top: calc(50% - 50px);
    transform: translate(-50%, -50%);
    left: 50%;
    font-size: 40vh;

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
      font-family: ${language};
    `}

    ${!isSign &&
    isOver &&
    css`
      font-family: ${language};
    `}

    ${language === "asl" &&
    (isSign || (!isSign && isOver)) &&
    css`
      font-size: 65vh;
    `}

    ${language === "bsl" &&
    (isSign || (!isSign && isOver)) &&
    css`
      font-size: 40vh;
    `}
    
    ${language === "isl" &&
    (isSign || (!isSign && isOver)) &&
    css`
      font-size: 35vh;
    `}
  `;
});

export const Letter = (props: Props) => {
  const { letter, isSign, language } = props;

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
      language={language}
      isOver={isOver}
      ref={(ref) => {
        letterWrapper.current = ref as HTMLDivElement;
      }}
    >
      {letter}
    </LetterWrapper>
  );
};

/* 
    ${!isASL &&
    */
