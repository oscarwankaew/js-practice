// 1. Start with an array of numbers and compute the sum of all the numbers.
//    For example, [5, 10, 8, 3] becomes 26.
var numbers = [5, 10, 8, 3];
var sum = 0;
var index = 0;
while (index < numbers.length) {
  sum = sum + numbers[index];
  index = index + 1;
}
console.log(sum);

// 2. Start with an array of strings and combine them all into a single string.
//    For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".
var sports = ["volleyball", "basketball", "badminton"];
var word = "";
var index = 0;
while (index < sports.length) {
  var sport = sports[index];
  word = word + sport;
  index = index + 1;
}
console.log(word);

// 3. Start with an array of hashes and compute the sum of the prices (from the :price key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.
var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var totalPrice = 0;
var index = 0;
while (index < items.length) {
  totalPrice += items[index].price;
  index += 1;
}
console.log(totalPrice);

// 4. Start with an array of numbers and compute the the minumum number.
//    For example, [5, 10, 8, 3] becomes 3.
var numbers = [5, 10, 8, 3];
var minimum = numbers[0];
var index = 0;
while (index < numbers.length) {
  var number = numbers[index];
  if (number < minimum) {
    minimum = number;
  }
  index++;
}
console.log(minimum);
