// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesInRange = apples.filter((apple) => apple + a >= s && apple + a <= t).length;
  const orangesInRange = oranges.filter((orange) => orange + b >= s && orange + b <= t).length;

  console.log(applesInRange);
  console.log(orangesInRange);
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]), 1, 1);
