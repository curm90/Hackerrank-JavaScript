// https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

function birthday(s, d, m) {
  // place to store the result (count of ways)
  let count = 0;
  // iterate through the array
  for (let i = 0; i < s.length; i++) {
    // check if the subarray of length m starting from index i has a sum equal to d
    let sum = 0;
    for (let j = 0; j < m; j++) {
      // check if the index is within bounds
      if (i + j < s.length) {
        sum += s[i + j];
      }
    }
    // if the sum is equal to d, increment the count
    if (sum === d) {
      count++;
    }
    // if the index is out of bounds, break the loop
    if (i + m >= s.length) {
      break;
    }
  }
  // return the count of ways
  return count;
}

function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + m).reduce((a, b) => a + b, 0) === d) {
      count++;
    }
  }

  return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2), 2);
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2), 0);
console.log(birthday([4], 4, 1), 1);
