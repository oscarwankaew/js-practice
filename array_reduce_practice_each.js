//  1. Start with an array of numbers and compute the sum of all the numbers.
//     For example, [5, 10, 8, 3] becomes 26.
var numbers = [5, 10, 8, 3];
var sum = 0;
numbers.forEach(function (number) {
  sum = sum + number;
});
console.log(sum);

//  2. Start with an array of strings and combine them all into a single string.
//     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".
var sports = ["volleyball", "basketball", "badminton"];
var word = "";
sports.forEach(function (sport) {
  word = word + sport;
});
console.log(word);

//  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.
var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var totalPrice = 0;
items.forEach(function (item) {
  totalPrice += item.price;
});
console.log(totalPrice);

//  4. Start with an array of numbers and compute the the minumum number.
//     For example, [5, 10, 8, 3] becomes 3.
var numbers = [5, 10, 8, 3];
var minimum = numbers[0];
numbers.forEach(function (number) {
  if (number < minimum) {
    minimum = number;
  }
});
console.log(minimum);
