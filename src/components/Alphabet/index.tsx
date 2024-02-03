import React from "react";
import * as S from "./style";

type AlphabetProps = {
  letter: string[];
};

const Alphabet = ({ letter }: AlphabetProps) => {
  const gameEnd = true;

  return (
    <S.Layout>
      {letter.map((item, index) => {
        return (
          <S.Letter>
            <S.Alphabet gameEnd={gameEnd}>{item}</S.Alphabet>
          </S.Letter>
        );
      })}
    </S.Layout>
  );
};

export default Alphabet;
