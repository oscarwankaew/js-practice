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

//  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
//     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].
var letters = ["a", "b", "c", "d"];
var letterCombinations = [];
var index1 = 0;
while (index1 < letters.length) {
  var index2 = 0;
  while (index2 < letters.length) {
    if (index1 !== index2) {
      letterCombinations.push(letters[index1] + letters[index2]);
    }
    index2 += 1;
  }
  index1 += 1;
}
console.log(letterCombinations);

//  4. Use a nested loop to find the largest product of any two different numbers within a given array.
//     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.
var numbers = [5, -2, 1, -9, -7, 2, 6];
var maxProduct = numbers[0] * numbers[1];
var index1 = 0;
while (index1 < numbers.length) {
  var currentNumber = numbers[index1];
  index2 = 0;
  while (index2 < numbers.length) {
    if (index1 !== index2) {
      var otherNumber = numbers[index2];
      var product = currentNumber * otherNumber;
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
    index2 = index2 + 1;
  }
  index1 = index1 + 1;
}
console.log(maxProduct);
