// input 8, output: true
// input 7, output: false

function powerOfTwo(n) {
  if (n <= 0) return false;
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(powerOfTwo(8));  // true
console.log(powerOfTwo(7));  // false

console.log(8 / 2);  // 4
console.log(8 % 2);   // 0
