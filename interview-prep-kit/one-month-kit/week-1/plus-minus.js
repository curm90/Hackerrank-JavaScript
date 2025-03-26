// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function plusMinus(arr) {
  // a place to store the counts of the absolute value of each number
  const valueRatios = {
    positive: 0,
    negative: 0,
    zero: 0,
  };
  // a place to store the arr length (number of items)
  const numberOfItems = arr.length;
  // iterate over the array
  arr.forEach((num) => {
    // if number is > 0
    if (num > 0) {
      // increment positive
      valueRatios.positive += 1;
      // if number is < 0
    } else if (num < 0) {
      // increment negative
      valueRatios.negative += 1;
      // else
    } else {
      // increment zero
      valueRatios.zero += 1;
    }
  });

  // print ratio of absolute numbers on new line in order pos, neg, zero
  Object.values(valueRatios).forEach((value) => {
    console.log((value / numberOfItems).toFixed(6)) + '\n';
  });
}

function plusMinus(arr) {
  let positive = 0,
    negative = 0,
    zero = 0;
  const totalItems = arr.length;

  for (const num of arr) {
    if (num > 0) positive += 1;
    else if (num < 0) negative += 1;
    else zero += 1;
  }

  console.log((positive / totalItems).toFixed(6));
  console.log((negative / totalItems).toFixed(6));
  console.log((zero / totalItems).toFixed(6));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1])); // 0.500000 0.333333 0.166667
console.log(plusMinus([1, 2, 3, -1, -2, -3, 0, 0])); // 0.375000 0.375000 0.250000
console.log(plusMinus([1, 1, 0, -1, -1])); // 0.400000 0.200000 0.400000
console.log(plusMinus([-1, 0, 1])); // 0.333333 0.333333 0.333333
