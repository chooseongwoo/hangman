import React, { useEffect } from "react";
import * as S from "./style";

type AlphabetProps = {
  letter: string[];
  clickedAlphabets: string[];
};

const Alphabet = ({ letter, clickedAlphabets }: AlphabetProps) => {
  // 승리 로직
  useEffect(() => {
    if (
      letter &&
      letter.length > 0 &&
      letter.every((item) => clickedAlphabets.includes(item))
    ) {
      alert("게임에서 승리하였습니다.");
      window.location.reload();
    }
  }, [letter, clickedAlphabets]);

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
