import React from "react";
import * as S from "./style";

type AlphabetProps = {
  letter: string[];
  clickedAlphabet: string;
};

const Alphabet = ({ letter, clickedAlphabet }: AlphabetProps) => {
  const gameEnd = true;

  return (
    <S.Layout>
      {letter.map((item, index) => {
        return (
          <S.Letter>
            <S.Alphabet key={item} gameEnd={gameEnd}>
              {item === clickedAlphabet ? item : ""}
            </S.Alphabet>
          </S.Letter>
        );
      })}
    </S.Layout>
  );
};

export default Alphabet;
