/* Problem Statement #

Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the 
duplicates in-place return the new length of the array. */

// You can use two pointers as the current index and the next as a place holder for any duplicates

/* Analysis

1. Your function receives an array of sorted numbers
2. You want to remove any duplicates and return the length of this new array

Inputs: Array
Output: Length of new array

Pseudocode
1. Use two pointers starting from the top of the array (index and duplicate)
2. Iterate through the array
3. If item in the current array is different than previous array item then advance both pointers
4. If item in the current array is the same as previous then only advance index pointer
5. Continue to advance index pointer
6. Replace item at duplicate pointer and advance pointer return to step 2 until complete
6. Return position of duplicate pointer as length of new array

*/

const remove_duplicates = (arr) => {
	let nextNonDuplicate = 1;
	let i = 1;

	while (i < arr.length) {
		if (arr[nextNonDuplicate - 1] !== arr[i]) {
			arr[nextNonDuplicate] = arr[i];
			nextNonDuplicate += 1;
		}
		i += 1;
	}

	return nextNonDuplicate;
};

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
