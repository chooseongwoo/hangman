import React, { useState } from "react";
import * as S from "./style";

type HangManProps = {
  mistakes: number;
};

const HangMan = ({ mistakes }: HangManProps) => {
  const drawHangMan = () => {
    const parts = [
      <S.Rope />,
      <S.Head />,
      <S.Body />,
      <S.LeftArm />,
      <S.RightArm />,
      <S.LeftLeg />,
      <S.RightLeg />,
      <S.LeftFoot />,
      <S.RightFoot />,
      <S.Eye>X X</S.Eye>,
      <S.Mouth />,
    ];

    return parts.slice(0, mistakes);
  };

  return <S.Layout>{drawHangMan()}</S.Layout>;
};

export default HangMan;
