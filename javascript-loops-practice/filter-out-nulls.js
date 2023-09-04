/* exported filterOutNulls */

function filterOutNulls(values) {
  const withoutNulls = [];

  for (let i = 0; i <= values.length - 1; i++) {
    if (values[i] !== null) {
      withoutNulls.push(values[i]);
    }
  }
  return withoutNulls;
}
