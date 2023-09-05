/* exported isVowel */

function isVowel(char) {
  const lowerChar = char.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === lowerChar) {
      return true;
    }
  }
  return false;
}
