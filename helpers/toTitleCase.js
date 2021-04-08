export default (sentence) => {
  const patternMatcher = /(^|\s)[a-z]/g;

  return sentence.replace(patternMatcher, (sentence) => sentence.toUpperCase());
};
