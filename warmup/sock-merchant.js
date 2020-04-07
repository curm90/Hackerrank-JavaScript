// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n, arr) {
  // A place to store sorted arr
  const sortedArr = arr.sort();
  // A place to store result
  let result = 0;
  // Iterate over array
  for (let i = 0; i < sortedArr.length; i++) {
    const currentNum = sortedArr[i];
    const nextNum = sortedArr[i + 1];
    // If arr[i] === arr[i + 1]
    if (currentNum === nextNum) {
      // Increment result
      result++;
      // Increment index
      i++;
    }
  }
  // Return result
  return result;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);
