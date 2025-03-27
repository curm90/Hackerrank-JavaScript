// https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function lonelyinteger(a) {
  // place to store the occurences of each number
  const occurences = {};
  // iterate over the arr
  // if we have seen the number before
  // increment its occurence
  // else add number with an occurence of 1
  a.forEach((num) => (occurences[num] = occurences[num] + 1 || 1));
  // iterate over the object entries
  // if the value is 1 return the key
  const entries = Object.entries(occurences);

  for (const [key, value] of entries) {
    if (value === 1) return key;
  }
}

function lonelyinteger(a) {
  const occurences = {};
  a.forEach((num) => (occurences[num] = occurences[num] + 1 || 1));

  return Object.keys(occurences).find((key) => occurences[key] === 1);
}

console.log(lonelyinteger([1, 1, 2, 2, 3, 4, 4, 5, 5])); // 3
console.log(lonelyinteger([1, 1, 2])); // 2
console.log(lonelyinteger([1])); // 1;
