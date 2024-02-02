import React from "react";
import * as S from "./style";
import KeyBoard from "../../components/KeyBoard";
import Alphabet from "../../components/Alphabet";
import HangMan from "../../components/Hangman";

const Home = () => {
  return (
    <S.Layout>
      <HangMan />
      <Alphabet />
      <KeyBoard />
    </S.Layout>
  );
};

export default Home;
