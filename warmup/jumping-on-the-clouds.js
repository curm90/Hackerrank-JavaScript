// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function jumpingOnClouds(clouds) {
  // Place to store the count
  let count = 0;
  // Length of clouds array
  const arrLength = clouds.length;
  // Place to store the index
  let i = 0;
  // While i is less than clouds.length
  while (i < arrLength) {
    // if i + 2 is less than arr length and current index + 2 is a 0
    if (i + 2 < arrLength && clouds[i + 2] === 0) {
      // increment i by 2
      i += 2;
      // Increment count
      count += 1;
    }
    // Else if i + 1 is less than arr length and current index + 1 is a 0
    else if (i + 1 < arrLength && clouds[i + 1] === 0) {
      // increment i by 1
      i += 1;
      // Increment count
      count += 1;
    }
    // Else
    else {
      // Increment count
      i += 1;
    }
  }
  // Return count
  return count;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), 4);
