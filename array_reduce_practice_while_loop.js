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

// 5. Start with an array of strings and compute the total length of all the strings.
//    For example, ["volleyball", "basketball", "badminton"] becomes 29.
var words = ["volleyball", "basketball", "badminton"];
var totalLength = 0;
var index = 0;
while (index < words.length) {
  totalLength += words[index].length;
  index += 1;
}
console.log(totalLength);

// 6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.
var items = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var cheapestItem = items[0];
var index = 0;
while (index < items.length) {
  var item = items[index];
  if (item.price < cheapestItem.price) {
    cheapestItem = item;
  }
  index = index + 1;
}
console.log(cheapestItem);

// 7. Start with an array of numbers and compute product of all the numbers.
//    For example, [5, 10, 8, 3] becomes 1200.
var numbers = [5, 10, 8, 3];
var product = 1;
var index = 0;
while (index < numbers.length) {
  product = product * numbers[index];
  index = index + 1;
}
console.log(product);

// 8. Start with an array of strings and combine them all into a single string, separated by dashes.
//    For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".
var strings = ["volleyball", "basketball", "badminton"];
var singleString = "-";
var index = 0;
while (index < strings.length) {
  var string = strings[index];
  singleString += string + "-";
  index += 1;
}
console.log(singleString);

// 9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.
var products = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
var shortestNameProduct = products[0];
var index = 0;
while (index < products.length) {
  if (products[index].name.length < shortestNameProduct.name.length) {
    shortestNameProduct = products[index];
  }
  index++;
}
console.log(shortestNameProduct);

// 10. Start with an array of numbers and compute the maximum number.
//     For example, [5, 10, 8, 3] becomes 10.
var numbers = [5, 10, 8, 3];
var maximum = numbers[0];
var index = 0;
while (index < numbers.length) {
  var number = numbers[index];
  if (number > maximum) {
    maximum = number;
  }
  index += 1;
}
console.log(maximum);
