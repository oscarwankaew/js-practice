// 1. Start with an array of numbers and compute the sum of all the numbers.
//    For example, [5, 10, 8, 3] becomes 26.
// var numbers = [5, 10, 8, 3];
// var sum = numbers.reduce(function (sum, number) {
//   return sum + number;
// }, 0);
// console.log(sum);

// 2. Start with an array of strings and combine them all into a single string.
//    For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// var words = ["volleyball", "basketball", "badminton"];
// var string = words.reduce(function (string, word) {
//   return string + word;
// }, "");
// console.log(string);

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

// var sports = ["volleyball", "basketball", "badminton"];
// var length = sports.reduce(function (length, sport) {
//   return length + sport.length;
// }, 0);
// console.log(length);

// 6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var cheapest = items.reduce(function (cheap, item) {
//   if (cheap.price < item.price) {
//     return cheap;
//   } else {
//     return item;
//   }
// }, items[0]);
// console.log(cheapest);

// 7. Start with an array of numbers and compute product of all the numbers.
//    For example, [5, 10, 8, 3] becomes 1200.

// var numbers = [5, 10, 8, 3];
// var total = numbers.reduce(function (total, number) {
//   return total * number;
// }, 1);

// console.log(total);

// 8. Start with an array of strings and combine them all into a single string, separated by dashes.
//    For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// var sports = ["volleyball", "basketball", "badminton"];
// var string = sports.reduce(function (string, word) {
//   return string + word + "-";
// }, "-");
// console.log(string);

// 9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
//    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var shortestName = items.reduce(function (shortest, item) {
//   if (shortest.name.length < item.name.length) {
//     return shortest;
//   } else {
//     return item;
//   }
// }, items[0]);
// console.log(shortestName);

// 10. Start with an array of numbers and compute the maximum number.
//     For example, [5, 10, 8, 3] becomes 10.

// var numbers = [5, 10, 8, 3];
// var maximum = numbers.reduce(function (max, number) {
//   if (max > number) {
//     return max;
//   } else {
//     return number;
//   }
// }, numbers[0]);
// console.log(maximum);
