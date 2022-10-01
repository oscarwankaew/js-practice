/*
I: number[] - nums
O: number[] - product of all elements except for itself
C: O(N), Cannot use division

nums = [1, 2, 3, 4]
leftProduct = [1, 1, 2, 6]
rightProduct = [24, 12, 4, 1]
solutionArray = [24, 12, 8, 6]

*/

function productExceptSelf(array) {
  let leftProduct = [];
  let rightPrduct = [];
  let solutionArray = [];

  for (let i = 0; i < array.length; i++) {
    if (leftProduct.length === 0) {
      leftProduct.push(1);
    } else {
      leftProduct.push(leftProduct[i - 1] * array[i - 1]);
    }
  }

  for (let i = array.length - 1; i > -1; i--) {
    if (rightPrduct.length === 0) {
      rightPrduct.push(1);
    } else {
      rightPrduct.unshift(rightPrduct[0] * array[i + 1]);
    }
  }

  for (let i = 0; i < leftProduct.length; i++) {
    solutionArray.push(leftProduct[i] * rightPrduct[i]);
  }

  return solutionArray;
}

console.log(productExceptSelf([1, 2, 3, 4]));
