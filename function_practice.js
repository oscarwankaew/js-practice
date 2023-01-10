// 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.
function getDouble(number) {
  return number * 2;
}
console.log(getDouble(8));

// 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.
function makeUpcase(string) {
  return string.toUpperCase();
}
console.log(makeUpcase("hello"));

// 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.
function getDifference(number1, number2) {
  return number1 - number2;
}
console.log(getDifference(4, 2));

// 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.
function square(number) {
  return number * number;
}
console.log(square(4));

// 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.
function getFirstLetter(string) {
  return string[0];
}
console.log(getFirstLetter("something"));

// 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.
function stringCombiner(string1, string2, string3) {
  return string1 + " " + string2 + " " + string3;
}
console.log(stringCombiner("the", "cat", "jumped"));

// 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.
function convertToString(number) {
  return number.toString();
}
console.log(convertToString(4));

// 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.
function repeatString(string) {
  return string + string + string + string + string;
}
console.log(repeatString("bob"));

// 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.
function average(number1, number2, number3) {
  return (number1 + number2 + number3) / 3;
}
console.log(average(95, 100, 70));

// 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.
function convertNumber(number) {
  return number * 10 + 30;
}
console.log(convertNumber(2));
