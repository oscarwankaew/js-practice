// 17 / 1 = 17
// 11 / 1 = 11

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(5));
console.log(isPrime(17));
console.log(isPrime(12));
console.log(isPrime(11));
