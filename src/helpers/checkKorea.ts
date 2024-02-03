export const containsKoreanOrAlphabet = (str: string) => {
  const koreanOrAlphabetRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]+$/;
  return koreanOrAlphabetRegex.test(str);
};
