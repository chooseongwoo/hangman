export const containsKoreanOrSpecialOrNumber = (str: string) => {
  const koreanOrSpecialOrNumberRegex =
    /[ㄱ-ㅎㅏ-ㅣ가-힣\d\s!@#$%^&*(),.?":{}|<>]/;

  return koreanOrSpecialOrNumberRegex.test(str);
};
