import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { checkKorea } from "../../helpers/checkKorea";

import KeyBoard from "../../components/KeyBoard";
import Alphabet from "../../components/Alphabet";
import HangMan from "../../components/Hangman";

const Home = () => {
  const [letter, setLetter] = useState("");
  const [clickedAlphaBet, setClickedAlphabet] = useState("");
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      let input = prompt("영어 단어를 입력하세요.");
      if (!input || checkKorea(input)) {
        window.location.reload();
      }
      console.log(input);
      setLetter(input?.toUpperCase() ?? "");
      isMounted.current = false;
    }
  }, []);

  return (
    <S.Layout>
      <HangMan />
      <Alphabet />
      <KeyBoard setClickedAlphabet={setClickedAlphabet} />
    </S.Layout>
  );
};

export default Home;
