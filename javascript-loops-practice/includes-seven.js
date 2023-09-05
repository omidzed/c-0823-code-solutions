/* exported includesSeven */

function includesSeven(values) {
  for (let i = 0; i <= values.length - 1; ) {
    if (values[i] === 7) {
      return true;
    } else i++;
  }
  return false;
}
