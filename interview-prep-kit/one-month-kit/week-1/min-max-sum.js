// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

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
