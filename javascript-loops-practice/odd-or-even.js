/* exported oddOrEven */

function oddOrEven(numbers) {
  const oddOrEvenArr = [];
  for (let i = 0; i <= numbers.length - 1; i++)
    if (numbers[i] % 2 === 0) oddOrEvenArr.push('even');
    else if (numbers[i] % 2 === 1) {
      oddOrEvenArr.push('odd');
    }
  return oddOrEvenArr;
}
