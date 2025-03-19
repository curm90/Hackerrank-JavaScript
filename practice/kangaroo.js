// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
  while (true) {
    if (x1 === x2) return 'YES';
    if (x1 > x2 && v1 >= v2) return 'NO';
    if (x1 < x2 && v1 <= v2) return 'NO';
    x1 += v1;
    x2 += v2;
  }
}

function kangaroo(x1, v1, x2, v2) {
  if (v1 === v2) {
    return x1 === x2 ? 'YES' : 'NO';
  }

  const n = (x2 - x1) / (v1 - v2);

  return n > 0 && Number.isInteger(n) ? 'YES' : 'NO';
}

console.log(kangaroo(0, 3, 4, 2), 'YES'); // YES
console.log(kangaroo(0, 2, 5, 3), 'NO'); // NO
console.log(kangaroo(21, 6, 47, 3), 'NO'); // NO
console.log(kangaroo(43, 2, 70, 2), 'NO'); // NO
console.log(kangaroo(2, 3, 0, 1), 'NO');
