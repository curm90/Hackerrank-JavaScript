// https://www.hackerrank.com/challenges/one-month-preparation-kit-sock-merchant/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-two

function sockMerchant(n, ar) {
  // place to store the number of pairs
  let numberOfPairs = 0;
  // place to store a frequency lookup
  const frequencyOfPairs = {};

  // iterate over the array
  for (const num of ar) {
    // if we have seen the number before increment its count else add the number to the lookup and init count to 1
    frequencyOfPairs[num] = frequencyOfPairs[num] + 1 || 1;
  }

  // iterate over the values of the lookup
  for (const value of Object.values(frequencyOfPairs)) {
    // if the value is greater than or equal to 2
    if (value >= 2) {
      // round down the value and add it to the number of pairs seen / 2
      numberOfPairs += Math.floor(value / 2);
    }
  }

  // return number of pairs
  return numberOfPairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
console.log(sockMerchant(10, [1, 2, 1, 2, 1, 3, 2])); // 2
console.log(sockMerchant(7, [1, 1, 1, 1, 1, 1, 1])); // 3
console.log(sockMerchant(5, [1, 2, 3, 4, 5])); // 0
