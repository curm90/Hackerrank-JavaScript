// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Mutating
function rotLeft(arr, rotations) {
  // While rotations is greater than 0
  while (rotations > 0) {
    // Pop off first index
    const firstIndexValue = arr.shift();
    // Insert value at first index to front of array
    arr.push(firstIndexValue);
    // Decrement rotations
    rotations--;
  }
  // Return arr
  return arr;
}

// Non mutating
function rotLeft(arr, rotations) {
  // A place to store the result
  const result = [...arr];
  // A place to store rotations
  let rotationsCount = rotations;
  // While rotations is greater than 0
  while (rotationsCount > 0) {
    // Pop off first index
    const firstIndexValue = result.shift();
    // Insert value at first index to front of array
    result.push(firstIndexValue);
    // Decrement rotationsCount
    rotationsCount--;
  }
  // Return result
  return result;
}

function rotLeft(arr, rotations) {
  return [...arr.slice(rotations), ...arr.slice(0, rotations)];
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
