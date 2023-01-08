/* Problem Statement #
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9] 

Analysis
--------
Inputs: Sorted Array
Output: New array with squares of all numbers from the input array also in sorted order

Note: There are many ways to solve but this challenge is to use two pointers which can be helpful with negative numbers

Pseudocode
----------
0. Create a new blank array to return
1. Start pointers at either end of the sorted input array
2. Square array items at both pointers
3. Which square value is greater then unshift it first onto new array then go next iteration to compare
4. Move pointers inward by one continue until pointers are at same item
5. Add last item and reutrn new array


*/

const make_squares = (arr) => {
	const n = arr.length;
	let squares = new Array(n).fill(0);
	let highestSquareIdx = n - 1;
	let left = 0,
		right = n - 1;

	while (left <= right) {
		let leftSquare = arr[left] * arr[left];
		let rightSquare = arr[right] * arr[right];

		if (leftSquare > rightSquare) {
			squares[highestSquareIdx] = leftSquare;
			left += 1;
		} else {
			squares[highestSquareIdx] = rightSquare;
			right -= 1;
		}
		highestSquareIdx -= 1;
	}

	return squares;
};

console.log(make_squares([-2, -1, 0, 2, 3]));
