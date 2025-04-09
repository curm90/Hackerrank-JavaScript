// https://www.hackerrank.com/challenges/one-month-preparation-kit-two-arrays/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

function twoArrays(k, A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] + sortedB[i] < k) {
      return 'NO';
    }
  }

  return 'YES';
}

function twoArrays(k, A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  return sortedA.every((a, i) => a + sortedB[i] >= k) ? 'YES' : 'NO';
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]), 'YES'); // YES
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]), 'NO');
