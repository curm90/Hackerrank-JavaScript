// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function alternatingCharacters(s) {
  // place to store result
  let result = 0;
  // split the string into array of letters
  const letterArr = s.split('');
  // iterate over letters up to length - 1
  for (let i = 0; i < letterArr.length; i++) {
    const currentLetter = letterArr[i];
    const nextLetter = letterArr[i + 1];
    // check if current letter is equal to next letter
    if (currentLetter === nextLetter) {
      // increment count
      result++;
    }
  }
  // return result
  return result;
}

console.log(alternatingCharacters('AAAA'), 3);
console.log(alternatingCharacters('BBBBB'), 4);
console.log(alternatingCharacters('ABABABABAB'), 0);
console.log(alternatingCharacters('BABABA'), 0);
console.log(alternatingCharacters('AAABBB'), 4);
