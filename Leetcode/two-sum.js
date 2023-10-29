/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given ,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

input: array of integers
output: return indices of the two numbers that add up to the target

1. iterate once and as you go add each item into an array
2. as you progress you check if the target and current item's difference is in the array
3. if it is then you have your two indices
4. if not then continue iteration and adding to the hash map

*/

var twoSum = function (nums, target) {
	const collection = [];

	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];

		if (collection.includes(diff)) {
			return [collection.indexOf(diff), i];
		}

		collection.push(nums[i]);
	}
};

const nums = [2, 7, 11, 15, 13, 12, 3, 9];
const target = 11;

result = twoSum(nums, target);
console.log(result);
