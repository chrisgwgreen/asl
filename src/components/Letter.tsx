import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components/macro";

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

    if (letterElement) {
      letterElement.addEventListener("mouseover", handleLetterOver);
      letterElement.addEventListener("mouseout", handleLetterOut);
    }

    return () => {
      if (letterElement) {
        letterElement.removeEventListener("mouseover", handleLetterOver);
        letterElement.removeEventListener("mouseout", handleLetterOut);
      }
    };
  }, []);

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
