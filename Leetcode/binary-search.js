/*

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.

input: array of integers, target value in the array
output: the index of the target in the array or -1

pseudocode
1. set mid point of array to search
2. if target is higher than midpoint then midpoint is now start and midpoint is between that and the end
3. if target is lower than midpoint then midpoint would now be the end and the new midpoint between start and it
4. compare until you find the target and then return the index
5. if you no longer have a midpoint between values start, end and you don't have target then return -1

*/

var search = function (nums, target) {
	let start = 0;
	let end = nums.length - 1;

	while (start <= end) {
		const midpoint = Math.floor((start + end) / 2);
		if (nums[midpoint] === target) {
			return midpoint;
		} else if (nums[midpoint] < target) {
			start = midpoint + 1;
		} else {
			end = midpoint - 1;
		}
	}

	return -1;
};

const nums = [[-1, 0, 3, 5, 9, 12], [5], [2, 5]];
const target = [9, -5, 5];

const result = search(nums[1], target[1]);
console.log(result);
