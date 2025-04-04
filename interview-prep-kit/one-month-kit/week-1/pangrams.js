// https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function pangrams(s) {
  const seen = new Set();

  for (const letter of s.toLowerCase()) {
    if (letter >= 'a' && letter <= 'z') {
      seen.add(letter);
    }

    if (seen.size === 26) {
      return 'pangram';
    }
  }

  return 'not pangram';
}

function pangrams(s) {
  const seen = new Array(26).fill(false);
  let count = 0;

  for (const letter of s.toLowerCase()) {
    const index = letter.charCodeAt(0) - 'a'.charCodeAt(0);

    if (index >= 0 && index < 26 && !seen[index]) {
      seen[index] = true;
      count += 1;
    }
    if (count === 26) {
      return 'pangram';
    }
  }

  return 'not pangram';
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'), 'pangram'); // Output: "pangram"
console.log(pangrams('We promptly judged antique ivory buckles for the prize'), 'not pangram'); // Output: "not pangram"
console.log(pangrams('qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun'), 'pangram');
