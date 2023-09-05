/* exported reverse */

function reverse(array) {
  const reversedArr = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
}
