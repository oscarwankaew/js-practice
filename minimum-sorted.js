function minimumSorted(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let midPoint = Math.floor((left + right) / 2);
    if (array[midPoint] > array[right]) {
      left = midPoint + 1;
    } else {
      right = midPoint;
    }
  }
  return array[left];
}

console.log(minimumSorted([3, 4, 5, 1, 2]));
