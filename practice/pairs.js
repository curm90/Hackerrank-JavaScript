// https://www.hackerrank.com/challenges/pairs/problem?h_l=interview&playlist_slugs[]=interview-preparation-kit&playlist_slugs[]=search

// Too Slow
function pairs(target, arr) {
  // place to store the pairs
  let pairs = 0;
  // Sort array
  const sortedArr = [...arr].sort();
  // iterate over array
  for (let i = 0; i < sortedArr.length; i++) {
    const num = sortedArr[i];
    // place to store sum of arr[i] - target
    const sum = num - target;
    // if arr contains result
    if (sortedArr.includes(sum)) {
      // increment pairs
      pairs++;
    }
  }
  // return pairs
  return pairs;
}

console.log(pairs(2, [1, 5, 3, 4, 2]), 3);
