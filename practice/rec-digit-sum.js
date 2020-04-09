// https://www.hackerrank.com/challenges/recursive-digit-sum/problem?h_l=interview&playlist_slugs[]=interview-preparation-kit&playlist_slugs[]=recursion-backtracking

function superDigit(n, k) {
  const sum = n.split('').reduce((acc, total) => +acc + +total) * k;
  const sumString = sum.toString();

  if (sumString.length > 1) {
    return superDigit(sumString, 1);
  }
  return sumString[0];
}

function superDigit(n, k) {
  const sum = n.split('').reduce((acc, total) => +acc + +total) * k;
  const sumString = sum.toString();
  return sumString.length > 1
    ? superDigit(sumString, 1)
    : sumString[0];
}

function superDigit(n, k) {
  const sum =
    n.split('').reduce((acc, total) => +acc + +total) * k + '';
  return sum.length > 1 ? superDigit(sum, 1) : sum[0];
}

console.log(superDigit('9875', 4), 8);
console.log(superDigit('123', 3), 9);
