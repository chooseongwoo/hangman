export const containsKoreanOrAlphabet = (str: string) => {
  const koreanOrAlphabetRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/;
  return koreanOrAlphabetRegex.test(str);
};
