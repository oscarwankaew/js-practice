// 1. Start with an array of numbers and compute the sum of all the numbers.
//    For example, [5, 10, 8, 3] becomes 26.
// var numbers = [5, 10, 8, 3];
// var sum = numbers.reduce(function (sum, number) {
//   return sum + number;
// }, 0);
// console.log(sum);

// 2. Start with an array of strings and combine them all into a single string.
//    For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// var strings = ["volleyball", "basketball", "badminton"];
// var word = strings.reduce(function (word, string) {
//   return word + string;
// });
// console.log(word);

// 3. Start with an array of hashes and compute the sum of the prices (from the :price key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var total = items.reduce(function (total, item) {
//   return total + item.price;
// }, 0);
// console.log(total);

// 4. Start with an array of numbers and compute the the minumum number.
//    For example, [5, 10, 8, 3] becomes 3.

// var numbers = [5, 10, 8, 3];
// var minimum = numbers.reduce(function (min, number) {
//   if (number < min) {
//     return number;
//   } else {
//     return min;
//   }
// }, numbers[0]);
// console.log(minimum);

// 5. Start with an array of strings and compute the total length of all the strings.
//    For example, ["volleyball", "basketball", "badminton"] becomes 29.

// var strings = ["volleyball", "basketball", "badminton"];
// var sum = strings.reduce(function (sum, word) {
//   return sum + word.length;
// }, 0);
// console.log(sum);

// 6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var lowestPrice = items.reduce(function (lowestPrice, item) {
//   if (item.price < lowestPrice.price) {
//     return item;
//   } else {
//     return lowestPrice;
//   }
// }, items[0]);
// console.log(lowestPrice);

// 7. Start with an array of numbers and compute product of all the numbers.
//    For example, [5, 10, 8, 3] becomes 1200.

// var numbers = [5, 10, 8, 3];
// var product = numbers.reduce(function (product, number) {
//   return product * number;
// }, 0);
// console.log(product);

// 8. Start with an array of strings and combine them all into a single string, separated by dashes.
//    For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// var strings = ["volleyball", "basketball", "badminton"];
// var singleString = strings.reduce(function (total, word) {
//   return total + word + "-";
// }, "-");
// console.log(singleString);

// 9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var shortestName = items.reduce(function (shortest, item) {
//   if (item.name.length < shortest.name.length) {
//     return item;
//   } else {
//     return shortest;
//   }
// }, items[0]);
// console.log(shortestName);

// 10. Start with an array of numbers and compute the maximum number.
//     For example, [5, 10, 8, 3] becomes 10.

// var numbers = [5, 10, 8, 3];
// var maximum = numbers.reduce(function (max, number) {
//   if (number > max) {
//     return number;
//   } else {
//     return max;
//   }
// }, numbers[0]);
// console.log(maximum);
