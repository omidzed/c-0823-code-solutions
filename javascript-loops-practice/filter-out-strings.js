/* exported filterOutStrings */

function filterOutStrings(values) {
  const noStrings = [];

  for (let i = 0; i <= values.length - 1; i++) {
    if (typeof values[i] === 'number') {
      noStrings.push(values[i]);
    }
    if (values[i] === null) {
      noStrings.push(null);
    }
  }
  return noStrings;
}
