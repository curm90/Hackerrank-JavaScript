// https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(n) {
  const numString = n.toString().split('');
  let result = 0;

  numString.map((num) => {
    if (n % num === 0) {
      result++;
    }
  });

  return Number(result);
}

console.log(findDigits(111), 3);
console.log(findDigits(12), 2);
console.log(findDigits(1012), 3);
