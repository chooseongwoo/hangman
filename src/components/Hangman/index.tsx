// HangMan.tsx
import React, { useState } from "react";
import * as S from "./style";

const HangMan: React.FC = () => {
  const [mistakes, setMistakes] = useState<number>(0);

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
      <S.Eye>X  X</S.Eye>,
      <S.Mouth />,
    ];

    return parts.slice(0, mistakes);
  };

  return <S.Layout>{drawHangMan()}</S.Layout>;
};

export default HangMan;
