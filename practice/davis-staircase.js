// https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem?h_l=interview&playlist_slugs[]=interview-preparation-kit&playlist_slugs[]=recursion-backtracking

function stepPerms(n, cache = {}) {
  if (cache[n]) {
    return cache[n];
  }

  if (n <= 2 && n > 0) {
    return n;
  }

  if (n === 3) {
    return 4;
  } else {
    cache[n] =
      stepPerms(n - 1, cache) +
      stepPerms(n - 2, cache) +
      stepPerms(n - 3, cache);
    return cache[n];
  }
}

console.log(stepPerms(1), 1);
console.log(stepPerms(3), 4);
console.log(stepPerms(7), 44);
