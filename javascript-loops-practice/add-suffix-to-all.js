/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  const wordsWithSuffix = [];
  for (let i = 0; i <= words.length - 1; i++) {
    wordsWithSuffix.push(words[i] + suffix);
  }
  return wordsWithSuffix;
}
