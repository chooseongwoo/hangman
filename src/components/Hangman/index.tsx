import React, { useEffect, useState } from "react";
import * as S from "./style";

type HangManProps = {
  mistakes: number;
  letter: string;
};

const HangMan = ({ mistakes, letter }: HangManProps) => {
  // 패배 로직
  useEffect(() => {
    if (mistakes == 11) {
      alert(`게임에서 패배하였습니다. 정답은 ${letter}이었습니다.`);
      window.location.reload();
      return;
    }
  }, [mistakes]);

  const drawHangMan = () => {
    console.log(mistakes);
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
