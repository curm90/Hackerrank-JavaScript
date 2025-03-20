// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

function migratoryBirds(arr) {
  const lookup = {};

  arr.forEach((num) => (lookup[num] = lookup[num] + 1 || 1));

  const max = Math.max(...Object.values(lookup));
  const keys = Object.keys(lookup).filter((key) => lookup[key] === max);

  return Math.min(...keys);
}

function migratoryBirds(arr) {
  const lookup = new Map();

  arr.forEach((num) => lookup.set(num, (lookup.get(num) || 0) + 1));

  const max = Math.max(...lookup.values());
  return Math.min(...[...lookup.entries()].filter(([key, val]) => val === max).map(([key]) => key));
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]), 4); // 4
console.log(migratoryBirds([1, 1, 2, 2, 3]), 1); // 1
