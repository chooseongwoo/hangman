import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { containsKoreanOrSpecialOrNumber } from "../../helpers/checkKorea";

import KeyBoard from "../../components/KeyBoard";
import Alphabet from "../../components/Alphabet";
import HangMan from "../../components/Hangman";

const Home = () => {
  const [letter, setLetter] = useState("");
  const [clickedAlphabets, setClickedAlphabets] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState<number>(0);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      let input = prompt("영어 단어를 입력하세요.");
      if (
        !input ||
        containsKoreanOrSpecialOrNumber(input) ||
        input.length > 12
      ) {
        window.location.reload();
        return;
      }
      console.log(input);
      setLetter(input?.toUpperCase() ?? "");
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {
    clickedAlphabets.forEach((item) => {
      if (!letter.split("").includes(item)) {
        setMistakes(mistakes + 1);
      }
    });
  }, [clickedAlphabets]);


  const handleAlphabetClick = (clickedAlphabet: string) => {
    setClickedAlphabets((prev) => [...prev, clickedAlphabet]);
  };

  return (
    <S.Layout>
      <HangMan mistakes={mistakes} letter={letter} />
      <Alphabet letter={letter.split("")} clickedAlphabets={clickedAlphabets} />
      <KeyBoard setClickedAlphabet={handleAlphabetClick} />
    </S.Layout>
  );
};

export default Home;
