// https://www.hackerrank.com/challenges/one-month-preparation-kit-flipping-bits/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

function flippingBits(n) {
  // plcae to store the binary representation of n
  const binary = parseInt(n, 10).toString(2);
  // pad the binary representation with leading zeros to make it 32 bits
  const binaryPadded = binary.padStart(32, '0');
  // flip the bits by replacing 0 with 1 and 1 with 0
  const flippedBinary = binaryPadded
    .split('')
    .map((bit) => (bit === '0' ? '1' : '0'))
    .join('');

  // convert the flipped binary string back to a number and return
  return parseInt(flippedBinary, 2);
}

function flippingBits(n) {
  return parseInt(
    n
      .toString(2)
      .padStart(32, '0')
      .split('')
      .map((bit) => (bit === '0' ? '1' : '0'))
      .join(''),
    2
  );
}

function flippingBits(n) {
  return ~n >>> 0;
}

console.log(flippingBits(1), 4294967294);
