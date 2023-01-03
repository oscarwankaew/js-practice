//  1. Use a nested loop to convert an array of number pairs into a single flattened array.
//     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].
var numberPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
var flattenedNumbers = [];
var index1 = 0;
while (index1 < numberPairs.length) {
  var numberPair = numberPairs[index1];
  var index2 = 0;
  while (index2 < numberPair.length) {
    var number = numberPair[index2];
    flattenedNumbers.push(number);
    index2 = index2 + 1;
  }
  index1 = index1 + 1;
}
console.log(flattenedNumbers);

//  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
//     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].
var letters1 = ["a", "b", "c"];
var letters2 = ["d", "e", "f", "g"];
var combinedLetters = [];
var index1 = 0;
while (index1 < letters1.length) {
  var index2 = 0;
  while (index2 < letters2.length) {
    combinedLetters.push(letters1[index1] + letters2[index2]);
    index2 += 1;
  }
  index1 += 1;
}
console.log(combinedLetters);
