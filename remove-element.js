function removeElement(nums, val) {
  if (!nums) {
    return 0;
  }
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
}

console.log(removeElement([3, 2, 2, 3], 3));
