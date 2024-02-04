import React from "react";
import * as S from "./style";

type AlphabetProps = {
  letter: string[];
  clickedAlphabets: string[];
};

const Alphabet = ({ letter, clickedAlphabets }: AlphabetProps) => {

  return (
    <S.Layout>
      {letter.map((item, index) => {
        return (
          <S.Letter>
            <S.Alphabet key={item}>
              {clickedAlphabets.includes(item) ? item : ""}
            </S.Alphabet>
          </S.Letter>
        );
      })}
    </S.Layout>
  );
};

export default Alphabet;
