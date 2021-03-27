import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/macro";
import { newLetter } from "./utils";
import { Letter, Button } from "./components";
import { language } from "./types";
import random from "./assets/random.svg";
import chevron from "./assets/chevron.svg";

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;

  > button:nth-child(1) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const ButtonDirectionWrapper = styled.div`
  display: flex;

  > button:nth-child(1) {
    flex: 1;
  }

  > button:nth-child(2) {
    flex: 5;
    margin: 0 0.5rem;
  }

  > button:nth-child(3) {
    flex: 1;
  }
`;

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const RightChevron = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const LeftChevron = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(180deg);
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

  /*
   * Event Handlers
   */

  const handleToggleIsSign = () => {
    setIsSign(!isSign);
  };

  const handleChangeLanguage = () => {
    switch (language) {
      case "asl":
        document.title = "BSL";
        setLanguage("bsl");
        break;
      case "bsl":
        document.title = "ISL";
        setLanguage("isl");
        break;
      case "isl":
        document.title = "ASL";
        setLanguage("asl");
        break;
    }
  };

  const handleLetterChange = () => {
    setLetter(newLetter);
  };

  const handlePreviousLetter = useCallback(() => {
    let charCode = letter.charCodeAt(0);

    if (charCode === 97) {
      charCode = 122;
    } else {
      charCode = letter.charCodeAt(0) - 1;
    }

    setLetter(String.fromCharCode(charCode));
  }, [letter]);

  const handleNextLetter = useCallback(() => {
    let charCode = letter.charCodeAt(0);

    if (charCode === 122) {
      charCode = 97;
    } else {
      charCode = letter.charCodeAt(0) + 1;
    }

    setLetter(String.fromCharCode(charCode));
  }, [letter]);

  /*
   * React Hooks
   */
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.keyCode === 32) {
        handleLetterChange();
      }
      if (e.keyCode === 37) {
        handlePreviousLetter();
      }
      if (e.keyCode === 39) {
        handleNextLetter();
      }
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleNextLetter, handlePreviousLetter]);

  return (
    <>
      <Letter letter={letter} isSign={isSign} language={language} />

      <SignToggleWrapper>
        <Button onClick={handleChangeLanguage} color="#F4EC58">
          {language.toUpperCase()}
        </Button>
      </SignToggleWrapper>

      <ButtonWrapper>
        <Button onClick={handleToggleIsSign} color="#F4EC58">
          Toggle Sign/Letter
        </Button>

        <ButtonDirectionWrapper>
          <Button onClick={handlePreviousLetter} color="#FF8084">
            <LeftChevron src={chevron} alt="previous letter" />
          </Button>
          <Button onClick={handleLetterChange} color="#6ED9BF">
            <Image src={random} alt="shuffle letter" />
          </Button>
          <Button onClick={handleNextLetter} color="#FF8084">
            <RightChevron src={chevron} alt="next letter" />
          </Button>
        </ButtonDirectionWrapper>
      </ButtonWrapper>
    </>
  );
}

export default App;
