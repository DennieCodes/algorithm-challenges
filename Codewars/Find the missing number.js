/*

The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it 
here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find 
and return this number. What are the time and space complexities of your solution?

Analysis
--------
Input: Unsorted array
Output: Return the missing number from the array
Rules: Array is made of integers from 0 to 100

Pseudocode
----------
1. I am going to sort the array first using cyclic sort one time to it's length
2. Iterate through the array and swap out the item with whatever item is in it's respective position
3. The iteration index does not advance until the correct item is in the current index
4. When the iteration is done then iterate again but check that every item is in its respective position
5. If an item is not then return its value

*/

const missingNo = (nums) => {
	let i = 0;
	const n = nums.length;

	while (i < n) {
		const j = nums[i];

		if (nums[i] !== nums[j] && nums[i] < n) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
		} else {
			i += 1;
		}
	}

	for (let i = 0; i < n; i++) {
		if (nums[i] !== i) {
			return i;
		}
	}

	return n;
};

console.log(`${missingNo([4, 0, 3, 1])}`);

/* Best Practice solution

missingNo =(n)=> {
    for(i=0;i<=100;i++){
        if(!n.includes(i)){
            return i
        }}}

*/

// console.log(
// 	`${missingNo([
// 		9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88,
// 		18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92,
// 		84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2,
// 		46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7,
// 		58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35,
// 		61, 99, 16,
// 	])}\n ${[
// 		26, 0, 75, 87, 33, 52, 37, 59, 27, 4, 54, 15, 24, 7, 21, 82, 98, 79, 34, 25,
// 		1, 99, 5, 10, 96, 97, 65, 85, 47, 28, 81, 70, 74, 11, 38, 45, 84, 13, 41, 2,
// 		86, 39, 29, 43, 19, 31, 18, 58, 14, 77, 69, 32, 6, 66, 61, 62, 50, 53, 8,
// 		80, 72, 9, 68, 35, 42, 73, 83, 71, 92, 95, 63, 51, 16, 17, 64, 22, 44, 91,
// 		30, 76, 12, 3, 46, 60, 36, 56, 88, 89, 100, 78, 90, 49, 55, 48, 23, 93, 57,
// 		67, 20, 94,
// 	]}\n ${[
// 		15, 60, 61, 95, 46, 38, 68, 11, 47, 45, 27, 23, 3, 16, 8, 81, 76, 63, 62,
// 		57, 59, 22, 55, 78, 28, 54, 74, 39, 79, 65, 48, 82, 17, 2, 98, 90, 18, 9,
// 		56, 34, 7, 75, 10, 93, 35, 5, 73, 77, 85, 71, 13, 91, 83, 70, 89, 4, 84, 14,
// 		52, 99, 53, 33, 49, 42, 40, 58, 30, 36, 67, 72, 41, 26, 87, 97, 25, 29, 50,
// 		64, 21, 88, 66, 24, 94, 51, 1, 100, 0, 96, 69, 12, 92, 31, 37, 6, 86, 32,
// 		19, 44, 20, 43,
// 	]}`
// );
