function removeDuplicates(nums) {
  let current = nums;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return nums;
}

console.log(removeDuplicates([1, 1, 2]));
