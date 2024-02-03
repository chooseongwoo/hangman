import React, { useState } from "react";
import * as S from "./style";

type KeyBoardProps = {
  setClickedAlphabet: (clickedAlphabet: string) => void;
};

const KeyBoard = ({ setClickedAlphabet }: KeyBoardProps) => {
  const [disabledKeys, setDisabledKeys] = useState(Array(26).fill(false));

  const handleKeyClick = (item: string, index: number) => {
    setClickedAlphabet(item);
    setDisabledKeys((prev) => {
      const newDisabledKeys = [...prev];
      newDisabledKeys[index] = true;
      return newDisabledKeys;
    });
  };

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
            disabled={disabledKeys[index]}
            onClick={() => handleKeyClick(item, index)}
          >
            {item}
          </S.Key>
        );
      })}
    </S.Layout>
  );
};

export default KeyBoard;
