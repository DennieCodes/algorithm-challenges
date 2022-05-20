/* 
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as 
defined above.

Other Examples:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0] 

Analysis
--------
Input: An array of integers
Output: An array 

Pseudocode
----------
1. Iterate through the entire array and add up all of its items
2. Iterate in a second loop and add first sum's value minus each item at position 0
3. Return whole sum of values
(Sliding windows)

alt.

1. Iterate through the array and add each successive element to running total, also total plus itself.
(Reduce)
*/

// const partsSum = (ls) => {
// 	const returnArr = [0];

// 	ls.reverse().reduce((prev, next) => {
// 		returnArr.unshift(prev + next);

// 		return prev + next;
// 	}, 0);

// 	return returnArr;
// };

// ls = [0, 1, 3, 6, 10];
// ls = [1, 3, 6, 10];
// ls = [3, 6, 10];
// ls = [6, 10];
// ls = [10];
// ls = [];

const partsSum = (ls) => {
	let count = 0;

	return [
		0,
		...ls.reverse().map((item) => {
			count += item;
			return count;
		}),
	].reverse();
};

console.log(`${partsSum([0, 1, 3, 6, 10])}`); // [20, 20, 19, 16, 10, 0]

/*

Clever solution

function partsSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map(v => sum = sum - v);
}

*/

// console.log(`${typeof partsSum([0, 1, 3, 6, 10])}`); // [20, 20, 19, 16, 10, 0]
