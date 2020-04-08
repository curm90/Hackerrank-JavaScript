// https://www.hackerrank.com/challenges/counting-valleys/submissions/code/144899428?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function countingValleys(n, s) {
  let seaLevel = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'U') {
      seaLevel++;
      if (seaLevel === 0) {
        result++;
      }
    } else {
      seaLevel--;
    }
  }
  return result;
}

console.log(countingValleys(8, 'UDDDUDUU'), 1);
