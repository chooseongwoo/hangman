import React from "react";
import * as S from "./style";

const Alphabet = () => {
  const letter = ["H", "E", "L", "L", "O"];
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
