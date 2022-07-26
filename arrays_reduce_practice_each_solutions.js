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

//  5. Start with an array of strings and compute the total length of all the strings.
//     For example, ["volleyball", "basketball", "badminton"] becomes 29.
var words = ["volleyball", "basketball", "badminton"];
var totalLength = 0;
words.forEach(function (word) {
  totalLength += word.length;
});
console.log(totalLength);

//  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.
var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var cheapestItem = items[0];
items.forEach(function (item) {
  if (item.price < cheapestItem.price) {
    cheapestItem = item;
  }
});
console.log(cheapestItem);

//  7. Start with an array of numbers and compute product of all the numbers.
//     For example, [5, 10, 8, 3] becomes 1200.
var numbers = [5, 10, 8, 3];
var product = 1;
numbers.forEach(function (number) {
  product = product * number;
});
console.log(product);

//  8. Start with an array of strings and combine them all into a single string, separated by dashes.
//     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".
var strings = ["volleyball", "basketball", "badminton"];
var singleString = "-";
strings.forEach(function (string) {
  singleString += string + "-";
});
console.log(singleString);

//  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.
var products = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortestNameProduct = products[0];
products.forEach(function (product) {
  if (product.name.length < shortestNameProduct.name.length) {
    shortestNameProduct = product;
  }
});
console.log(shortestNameProduct);

// 10. Start with an array of numbers and compute the maximum number.
//     For example, [5, 10, 8, 3] becomes 10.
var numbers = [5, 10, 8, 3];
var maximum = numbers[0];
numbers.forEach(function (number) {
  if (number > maximum) {
    maximum = number;
  }
});
console.log(maximum);
