import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { newLetter } from "./utils";
import { useIsTabletViewport } from "./hooks";
import { Letter, Button } from "./components";
import { language } from "./types";
import random from "./assets/random.svg";

const ButtonWrapper = styled.div<{ isTabletViewport: boolean }>((props) => {
  const { isTabletViewport } = props;

  return css`
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);

    ${!isTabletViewport &&
    css`
      > button:nth-child(1) {
        margin-right: 0.5rem;
      }

      > button:nth-child(2) {
        margin-left: 0.5rem;
      }
    `}

    ${isTabletViewport &&
    css`
      width: 90%;

      > button:nth-child(1) {
        width: 100%;
        margin-bottom: 1rem;
      }

      > button:nth-child(2) {
        width: 100%;
      }
    `}
  `;
});

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const SignToggleWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

function App() {
  const [letter, setLetter] = useState(newLetter());
  const [isSign, setIsSign] = useState(false);
  const [language, setLanguage] = useState<language>("asl");

  const isTabletViewport = useIsTabletViewport();

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.keyCode === 32) {
        setLetter(newLetter);
      }
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleToggleIsSign = () => {
    setIsSign(!isSign);
  };

  const handleChangeLanguage = () => {
    switch (language) {
      case "asl":
        setLanguage("bsl");
        break;
      case "bsl":
        setLanguage("isl");
        break;
      case "isl":
        setLanguage("asl");
        break;
    }
  };

  const handleLetterChange = () => {
    setLetter(newLetter);
  };

  return (
    <>
      <Letter letter={letter} isSign={isSign} language={language} />

      <SignToggleWrapper>
        <Button onClick={handleChangeLanguage}>{language.toUpperCase()}</Button>
      </SignToggleWrapper>

      <ButtonWrapper isTabletViewport={isTabletViewport}>
        <Button onClick={handleToggleIsSign}>Toggle Sign/Letter</Button>
        <Button onClick={handleLetterChange}>
          <Image src={random} alt="" />
        </Button>
      </ButtonWrapper>
    </>
  );
}

export default App;
