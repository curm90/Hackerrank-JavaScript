// https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
  const stringCounts = {};
  const result = [];

  for (const string of strings) {
    stringCounts[string] = stringCounts[string] + 1 || 1;
  }

  for (const query of queries) {
    if (stringCounts[query]) {
      result.push(stringCounts[query]);
    } else {
      result.push(0);
    }
  }

  return result;
}

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']), [2, 1, 0]);
console.log(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh']), [1, 0, 1]);
