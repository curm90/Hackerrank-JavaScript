// https://www.hackerrank.com/challenges/one-month-preparation-kit-drawing-book/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-two

function pageCount(n, p) {
  // Calculate the number of turns from the front
  const frontTurns = Math.floor(p / 2);

  // Calculate the number of turns from the back
  const backTurns = Math.floor(n / 2 - Math.floor(p / 2));

  // Return the minimum of the two
  return Math.min(frontTurns, backTurns);
}

console.log(pageCount(6, 2), 1);
console.log(pageCount(5, 4), 0);
console.log(pageCount(6, 5), 1);
console.log(pageCount(7, 3), 1);
console.log(pageCount(5, 3), 1);
