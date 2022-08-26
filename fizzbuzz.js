// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz

function fizzBuzz(n) {
  let currentNumber = 1;

  while (currentNumber <= n) {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      console.log("FizzBuzz");
    } else if (currentNumber % 3 === 0) {
      console.log("Fizz");
    } else if (currentNumber % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(currentNumber);
    }
    currentNumber++;
  }
}

fizzBuzz(20);
