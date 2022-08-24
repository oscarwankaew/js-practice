//  1. Convert an array of arrays into a hash.
//     For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.
// var pairs = [
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ];
// var pairsObject = {};
// var index = 0;
// while (index < pairs.length) {
//   var key = pairs[index][0];
//   var value = pairs[index][1];
//   pairsObject[key] = value;
//   index = index + 1;
// }

// console.log(pairsObject);

//  2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
//     For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.
// var hashes = [
//   { id: 1, color: "blue", price: 32 },
//   { id: 2, color: "red", price: 12 },
// ];
// var hash = {};
// var index = 0;
// while (index < hashes.length) {
//   hash[hashes[index].id] = hashes[index];
//   index += 1;
// }
// console.log(hash);

//  3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
//     For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.
// var string = "bookkeeper";
// var frequency = {};
// var index = 0;
// while (index < string.length) {
//   var letter = string[index];
//   if (frequency[letter] === undefined) {
//     frequency[letter] = 0;
//   }
//   frequency[letter] += 1;
//   index += 1;
// }

// console.log(frequency);

//  4. Convert a hash into an array of arrays.
//     For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].
// var items = { chair: 100, book: 14 };
// var output = [];
// Object.entries(items).forEach(function ([name, price]) {
//   output.push(name, price);
// });

// console.log(output);

//  5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
//     For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].
// var names = { 321: { name: "Alice", age: 31 }, 322: { name: "Maria", age: 27 } };
// var output = [];
// Object.entries(names).forEach(function ([id, person]) {
//   person.id = parseInt(id);
//   output.push(person);
// });

// console.log(output);

//  6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
//     For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.
// var strings = ["do", "or", "do", "not"];
// var frequency = {};
// var index = 0;
// while (index < strings.length) {
//   var string = strings[index];
//   if (frequency[string] === undefined) {
//     frequency[string] = 0;
//   }
//   frequency[string] += 1;
//   index += 1;
// }

// console.log(frequency);

//  7. Convert a hash into a flat array containing all the hash’s keys and values.
//     For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].
// var hash = { a: 1, b: 2, c: 3, d: 4 };
// var output = [];
// Object.entries(hash).forEach(function ([letter, value]) {
//   output.push(letter);
//   output.push(value);
// });

// console.log(output);

//  8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
//     For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.
// var prices = { chair: 75, book: 15 };
// var items = [
//   { name: "chair", color: "red", weight: 10 },
//   { name: "book", color: "black", weight: 1 },
// ];
// var output = {};
// var index = 0;
// while (index < items.length) {
//   var item = items[index];
//   var name = item.name;
//   var color = item.color;
//   var weight = item.weight;
//   var price = prices[name];
//   output[name] = { price: price, color: color, weight: weight };
//   index += 1;
// }

// console.log(output);

//  9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
//     For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.
// var books = [
//   { author: "Jeff Smith", title: "Bone" },
//   { author: "George Orwell", title: "1984" },
//   { author: "Jeff Smith", title: "RASL" },
// ];
// var output = {};
// var index = 0;
// while (index < books.length) {
//   var book = books[index];
//   var author = book.author;
//   var title = book.title;
//   if (output[author] === undefined) {
//     output[author] = [];
//   }
//   output[author].push(title);
//   index += 1;
// }

// console.log(output);

// 10. Given a hash, create a new hash that has the keys and values switched.
//     For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.
// var hash = { a: 1, b: 2, c: 3 };
// var output = {};
// Object.entries(hash).forEach(function ([key, value]) {
//   output[value] = key;
// });

// console.log(output);
