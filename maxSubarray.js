// find the largest sum
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// go through every number in an array once to find largest sum
// check if my current sum is the largest or take my previous sum

function maxSum(array) {
  if (array.length === 1) {
    return array[0];
  }
  let maxValue = array[0];
  let accValue = array[0];

  for (let i = 1; i < array.length; i++) {
    let calc = Math.max(array[i], accValue + array[i]);

    if (calc > maxValue) {
      maxValue = calc;
      accValue = calc;
    }
    return maxValue;
  }
}
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
