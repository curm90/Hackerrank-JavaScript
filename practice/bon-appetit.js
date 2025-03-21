// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true

function bonAppetit(bill, k, b) {
  const billSum = bill.reduce((acc, curr, i) => (i === k ? acc : acc + curr), 0);
  const splitBillAmount = billSum / 2;

  console.log(splitBillAmount === b ? 'Bon Appetit' : Math.abs(b - splitBillAmount));
}

function bonAppetit(bill, k, b) {
  const splitBillAmount = bill.reduce((acc, curr, i) => (i === k ? acc : acc + curr), 0) / 2;

  console.log(splitBillAmount === b ? 'Bon Appetit' : Math.abs(b - splitBillAmount));
}

function bonAppetit(bill, k, b) {
  let billSum = 0;

  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      billSum += bill[i];
    }
  }
  const splitBillAmount = billSum / 2;

  console.log(splitBillAmount === b ? 'Bon Appetit' : Math.abs(b - splitBillAmount));
}

function bonAppetit(bill, k, b) {
  const { [k]: _, ...rest } = bill;
  const splitBillAmount = Object.values(rest).reduce((acc, curr) => acc + curr, 0) / 2;

  console.log(splitBillAmount === b ? 'Bon Appetit' : Math.abs(b - splitBillAmount));
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12)); // 5
console.log(bonAppetit([3, 10, 2, 9], 1, 7)); // Bon Appetit
console.log(bonAppetit([3, 10, 2, 9], 1, 6)); // 1
