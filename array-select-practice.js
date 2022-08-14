//  1. Start with an array of numbers and create a new array with only the numbers less than 20.
//     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].
// var numbers = [2, 32, 80, 18, 12, 3];
// var smallNumbers = [];
// var index = 0;
// while (index < numbers.length) {
//   var number = numbers[index];
//   if (number < 20) {
//     smallNumbers.push(number);
//   }
//   index = index + 1;
// }
// console.log(smallNumbers);

//  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
//     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].
// var strings = ["winner", "winner", "chicken", "dinner"];
// var wStrings = [];
// var index = 0;
// while (index < strings.length) {
//   if (strings[index][0] === "w") {
//     wStrings.push(strings[index]);
//   }
//   index += 1;
// }
// console.log(wStrings);

//  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].
// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var expensiveItems = [];
// var index = 0;
// while (index < items.length) {
//   var item = items[index];
//   if (item.price > 5) {
//     expensiveItems.push(item);
//   }
//   index++;
// }
// console.log(expensiveItems);

//  4. Start with an array of numbers and create a new array with only the even numbers.
//     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].
// var numbers = [2, 4, 5, 1, 8, 9, 7];
// var evenNumbers = [];
// var index = 0;
// while (index < numbers.length) {
//   if (numbers[index] % 2 === 0) {
//     evenNumbers.push(numbers[index]);
//   }
//   index = index + 1;
// }
// console.log(evenNumbers);

//  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
//     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].
// var words = ["a", "man", "a", "plan", "a", "canal", "panama"];
// var shortWords = [];
// var index = 0;
// while (index < words.length) {
//   var word = words[index];
//   if (word.length < 4) {
//     shortWords.push(word);
//   }
//   index = index + 1;
// }
// console.log(shortWords);

//  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].
// var things = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var shortNameThings = [];
// var index = 0;
// while (index < things.length) {
//   if (things[index].name.length < 6) {
//     shortNameThings.push(things[index]);
//   }
//   index = index + 1;
// }
// console.log(shortNameThings);

//  7. Start with an array of numbers and create a new array with only the numbers greater than or equal to 23.
//     For example, [8, 23, 0, 44, 1980, 3] becomes [23, 44, 1980].
// var numbers = [8, 23, 0, 44, 1980, 3];
// var largeNumbers = [];
// var index = 0;
// while (index < numbers.length) {
//   var number = numbers[index];
//   if (number >= 23) {
//     largeNumbers.push(number);
//   }
//   index += 1;
// }
// console.log(largeNumbers);

//  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
//     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].
// var words = ["big", "little", "good", "bad"];
// var nonBWords = [];
// var index = 0;
// while (index < words.length) {
//   if (words[index][0] !== "b") {
//     nonBWords.push(words[index]);
//   }
//   index = index + 1;
// }
// console.log(nonBWords);

//  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].
// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var inexpensiveItems = [];
// var index = 0;
// while (index < items.length) {
//   var item = items[index];
//   if (item.price < 10) {
//     inexpensiveItems.push(item);
//   }
//   index += 1;
// }
// console.log(inexpensiveItems);

// 10. Start with an array of numbers and create a new array with only the odd numbers.
//     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].
// var numbers = [2, 4, 5, 1, 8, 9, 7];
// var oddNumbers = [];
// var index = 0;
// while (index < numbers.length) {
//   if (numbers[index] % 2 === 1) {
//     oddNumbers.push(numbers[index]);
//   }
//   index++;
// }
// console.log(oddNumbers);
