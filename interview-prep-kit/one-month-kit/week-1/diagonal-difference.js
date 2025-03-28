// https://www.hackerrank.com/challenges/one-month-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function diagonalDifference(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let matrixSize = arr.length;

  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    const leftNum = subArr[i];
    const rightNum = subArr[matrixSize - i - 1];

    leftSum += leftNum;
    rightSum += rightNum;
  }

  return Math.abs(leftSum - rightSum);
}

function diagonalDifference(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let matrixSize = arr.length;

  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][matrixSize - i - 1];
  }

  return Math.abs(leftSum - rightSum);
}

function diagonalDifference(arr) {
  const matrixSize = arr.length;

  const { leftSum, rightSum } = arr.reduce(
    (sums, subArr, i) => {
      sums.leftSum += subArr[i];
      sums.rightSum += subArr[matrixSize - i - 1];

      return sums;
    },
    { leftSum: 0, rightSum: 0 }
  );

  return Math.abs(leftSum - rightSum);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ]),
  15
);
