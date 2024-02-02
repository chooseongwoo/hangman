import React from "react";
import * as S from "./style";
import KeyBoard from "../../components/KeyBoard";
import Alphabet from "../../components/Alphabet";

const Home = () => {
  return (
    <S.Layout>
      <Alphabet />
      <KeyBoard />
    </S.Layout>
  );
};

export default Home;
