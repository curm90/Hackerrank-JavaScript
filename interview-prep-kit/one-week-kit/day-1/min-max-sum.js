// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

function miniMaxSum(arr) {
  // get the min and max of the array
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  // iterate over the array and sum all the elements
  const sum = arr.reduce((tot, curr) => tot + curr, 0);
  // return sum - max and sum - min
  console.log(`${sum - max} ${sum - min}`);
}

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const minSum = arr.slice(0, 4).reduce((tot, curr) => tot + curr, 0);
  const maxSum = arr.slice(1).reduce((tot, curr) => tot + curr, 0);

  console.log(`${minSum} ${maxSum}`);
}

function miniMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    sum += num;

    if (num < min) {
      min = num;
    }

    if (num > max) {
      max = num;
    }
  }

  console.log(`${sum - max} ${sum - min}`);
}

console.log(miniMaxSum([1, 3, 5, 7, 9]), 16, 24);
console.log(miniMaxSum([1, 2, 3, 4, 5]), 10, 14);
