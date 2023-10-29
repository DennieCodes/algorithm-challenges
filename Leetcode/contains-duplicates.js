/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

input: an array of integers
output: true if there are duplicates or false if none

*/

var containsDuplicate = function (nums) {
	let obj = {};

	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]] == undefined) {
			obj[nums[i]] = 1;
		} else return true;
	}

	return false;
};

const efficientContainsDuplicates = (nums) => {
	const set = new Set(nums);
	return set.length !== nums.length;
};

let data = [
	[1, 2, 3, 1],
	[1, 2, 3, 4],
	[1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
];

result = efficientContainsDuplicates(data[0]);
console.log(result);
