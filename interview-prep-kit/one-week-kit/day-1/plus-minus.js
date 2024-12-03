// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

function plusMinus(arr) {
  const lookup = {
    positive: 0,
    negative: 0,
    zero: 0,
  };

  arr.forEach((num) => {
    if (num > 0) {
      lookup.positive += 1;
    } else if (num === 0) {
      lookup.zero += 1;
    } else {
      lookup.negative += 1;
    }
  });

  const entries = Object.entries(lookup);

  entries.forEach(([key, value]) => {
    console.log((value / arr.length).toFixed(6)) + '\n';
  });
}

console.log(plusMinus([1, 1, 0, -1, -1]), 0.4, 0.4, 0.2); // 0.400000 0.400000 0.200000;
console.log(plusMinus([-4, 3, -9, 0, 4, 1]), 0.5, 0.333333, 0.166667); // 0.500000 0.333333 0.166667;
