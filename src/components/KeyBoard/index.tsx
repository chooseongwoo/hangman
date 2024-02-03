import React from "react";
import * as S from "./style";

type KeyBoardProps = {
  setClickedAlphabet: React.Dispatch<React.SetStateAction<string>>;
};

const KeyBoard = ({ setClickedAlphabet }: KeyBoardProps) => {
  const clicked = false;
  const keys = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <S.Layout>
      {keys.map((item, index) => {
        return (
          <S.Key
            value={item}
            disabled={clicked}
            onClick={() => {
              setClickedAlphabet(item);
            }}
          >
            {item}
          </S.Key>
        );
      })}
    </S.Layout>
  );
};

export default KeyBoard;
