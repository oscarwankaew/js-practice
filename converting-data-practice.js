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
