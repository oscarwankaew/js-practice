// 1. Start with an array of numbers and create a new array with each number times 3.
//    For example, [1, 2, 3] becomes [3, 6, 9].
var numbers = [1, 2, 3];
var newNumbers = [];
var index = 0;
while (index < numbers.length) {
  var number = numbers[index];
  newNumbers.push(number * 3);
  index = index + 1;
}
console.log(newNumbers);

// 2. Start with an array of strings and create a new array with each string upcased.
//    For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].
var strings = ["hello", "goodbye"];
var newStrings = [];
index = 0;
while (index < strings.length) {
  newStrings.push(strings[index].toUpperCase());
  index += 1;
}
console.log(newStrings);

// 3. Start with an array of hashes and create a new array of string values from each hash's :name key.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].
var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var names = [];
var index = 0;
while (index < people.length) {
  var name = people[index].name;
  names.push(name);
  index++;
}
console.log(names);

// 4. Start with an array of numbers and create a new array with each number plus 7.
//    For example, [1, 2, 3] becomes [8, 9, 10].
var numbers = [1, 2, 3];
var newNumbers = [];
var index = 0;
while (index < numbers.length) {
  newNumbers.push(numbers[index] + 7);
  index = index + 1;
}
console.log(newNumbers);

/ 5. Start with an array of strings and create a new array with each string's length.
//    For example, ["hello", "goodbye"] becomes [5, 7].
var words = ["hello", "goodbye"];
var lengths = [];
var index = 0;
while (index < words.length) {
  var word = words[index];
  lengths.push(word.length);
  index++;
}
console.log(lengths);

// 6. Start with an array of hashes and create a new array of number values from each hash's :age key.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].
var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var ages = [];
var index = 0;
while (index < people.length) {
  ages.push(people[index]["age"]);
  index = index + 1;
}
console.log(ages);

// 7. Start with an array of numbers and create a new array with each number divided by 2.
//    For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].
var numbers = [1, 2, 3];
var newNumbers = [];
var index = 0;
while (index < numbers.length) {
  var number = numbers[index];
  var newNumber = number / 2;
  newNumbers.push(newNumber);
  index += 1;
}
console.log(newNumbers);

// 8. Start with an array of strings and create a new array with each string's first letter only.
//    For example, ["hello", "goodbye"] becomes ["h", "g"].
var strings = ["hello", "goodbye"];
var letters = [];
var index = 0;
while (index < strings.length) {
  letters.push(strings[index][0]);
  index++;
}
console.log(letters);

// 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].
var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var doubleAges = [];
var index = 0;
while (index < people.length) {
  var age = people[index].age;
  doubleAges.push(age * 2);
  index = index + 1;
}
console.log(doubleAges);

// 10. Start with an array of numbers and create a new array with each number converted into a string.
//    For example, [1, 2, 3] becomes ["1", "2", "3"].
var numbers = [1, 2, 3];
var strings = [];
var index = 0;
while (index < numbers.length) {
  strings.push(numbers[index].toString());
  index += 1;
}
console.log(strings);