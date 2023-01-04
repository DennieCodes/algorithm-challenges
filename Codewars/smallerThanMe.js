// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are
// smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// Input: An array of numbers
// Output: An array of numbers with counts of numbers to the right that are smaller than each array item in input
// Iterate through the array at each position
//   at each position iterate through the rest of the array to the right
//   but filter for values less than current item

const smallerThanMe = (nums) => {
	const output = nums.map((item, idx) => {
		return nums.slice(idx).filter((num) => num < item).length;
	});

	return output;
};

const smallerThanMeLean = (nums) => {
	return nums.map(
		(item, idx) => nums.slice(idx).filter((num) => num < item).length
	);
};

console.log(smallerThanMeLean([5, 4, 3, 2, 1]));
console.log(smallerThanMeLean([1, 2, 0]));
