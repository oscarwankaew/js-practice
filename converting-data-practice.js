//  1. Convert an array of arrays into a hash.
//     For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.
var pairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
var pairsObject = {};
var index = 0;
while (index < pairs.length) {
  var key = pairs[index][0];
  var value = pairs[index][1];
  pairsObject[key] = value;
  index = index + 1;
}
console.log(pairsObject);

//  2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
//     For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.
var items = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
var itemsObject = {};
var index = 0;
while (index < items.length) {
  itemsObject[items[index].id] = items[index];
  index += 1;
}
console.log(itemsObject);

//  3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
//     For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.
var word = "bookkeeper";
var letterFrequencies = {};
var index = 0;
while (index < word.length) {
  var letter = word[index];
  if (letterFrequencies[letter] === undefined) {
    letterFrequencies[letter] = 0;
  }
  letterFrequencies[letter] += 1;
  index += 1;
}
console.log(letterFrequencies);

//  4. Convert a hash into an array of arrays.
//     For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].
var things = { chair: 100, book: 14 };
var namePricePairs = [];
Object.entries(things).forEach(function ([name, price]) {
  namePricePairs.push(name, price);
});
console.log(namePricePairs);

//  5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
//     For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].
var people = { 321: { name: "Alice", age: 31 }, 322: { name: "Maria", age: 27 } };
var peopleArray = [];
Object.entries(people).forEach(function ([id, person]) {
  person.id = parseInt(id);
  peopleArray.push(person);
});
console.log(peopleArray);

//  6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
//     For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.
var words = ["do", "or", "do", "not"];
var wordFrequencies = {};
var index = 0;
while (index < words.length) {
  var word = words[index];
  if (wordFrequencies[word] === undefined) {
    wordFrequencies[word] = 0;
  }
  wordFrequencies[word] += 1;
  index++;
}
console.log(wordFrequencies);
