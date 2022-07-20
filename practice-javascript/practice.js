// const string = ["a", "b", "c", "d", "e", "f"];
// string.forEach((item, index) => {
//   if (index % 2 === 0) {
//     console.log(item);
//   }
// });

// function selectEvenItems(stringArray) {
//   var result = [];
//   var index = 0;
//   stringArray.forEach(function (string) {
//     if (index % 2 === 0) {
//       result.push(string);
//     }
//     index++;
//   });
//   return result;
// }

// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// function max(numbers) {
//   var currentMax = numbers[0];
//   numbers.forEach(function (number) {
//     if (currentMax < number) {
//       currentMax = number;
//     }
//   });
//   return currentMax;
// }
// console.log(max([5, 4, 8, 1, 2]));

// function factorial(number) {
//   var result = 1;
//   var currentNumber = number;
//   for (; currentNumber > 0; currentNumber--) {
//     result *= currentNumber;
//   }
//   return result;
// }
// console.log(factorial(5));

// function descending(numbers) {
//   var result = [];
//   for (var index = numbers.length - 1; index >= 0; index--) {
//     result.push(numbers[index]);
//   }
//   return result;
// }
// console.log(descending([1, 3, 5, 7]));

// function sumCombinations(number1, number2) {
//   var result = [];
//   number1.forEach(function (number1) {
//     number2.forEach(function (number2) {
//       result.push(number1 + number2);
//     });
//   });
//   return result;
// }

// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));

function sumOfArray(numbers) {
  var index = 0;
  var sum = 0;
  while (index < numbers.length) {
    sum = sum + numbers[index];
    index++;
  }
  return sum;
}
console.log(sumOfArray([10, 2, 3, 5, 7]));

function smallestString(strings) {
  var result = "";
  var first = strings[0].length;
  for (let index = 0; index < strings.length; index++) {
    if (first <= strings[index].length) {
      first = strings[index];
    }
    result = first.toString();
  }
  return result;
}
console.log(smallestString(["cat", "bird", "airplane"]));

function reverse(numbers) {
  var result = [];
  for (let index = numbers.length - 1; index >= 0; index--) {
    result.push(numbers[index]);
  }
  return result;
}
console.log(reverse([10, 2, 3, 5, 7]));

function findingWords(strings) {
  var result = [];
  for (let index = 0; index < strings.length; index++) {
    if (strings[index][0] === "a") {
      result.push(strings[index]);
    }
  }
  return result;
}
console.log(findingWords(["apple", "car", "ball", "apron"]));
