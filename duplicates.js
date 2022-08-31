function duplicate(array) {
  var numbersinArray = {};

  for (var number of array) {
    if (numbersinArray[number]) {
      return number;
    } else {
      numbersinArray[number] = true;
    }
  }
  return null;
}

console.log(duplicate([4, 6, 8, 9, 1, 3, 8])); // should return: 8
console.log(duplicate([4, 6, 8, 9, 1, 3, 7])); // should return: null
