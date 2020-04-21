// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
  const catAMoves = Math.abs(z - x);
  const catBMoves = Math.abs(z - y);

  if (catAMoves < catBMoves) {
    return 'Cat A';
  } else if (catBMoves < catAMoves) {
    return 'Cat B';
  } else {
    return 'Mouse C';
  }
}

console.log(catAndMouse(1, 2, 3), 'Cat B');
console.log(catAndMouse(1, 3, 2), 'Mouse C');
