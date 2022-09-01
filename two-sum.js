// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function (nums, target) {
  var hash = {};
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (nums[i] in hash) {
      return [hash[nums[i]], i];
    } else {
      hash[target - nums[i]] = i;
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
