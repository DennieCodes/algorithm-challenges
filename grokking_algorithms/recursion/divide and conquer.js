// Here are examples of using the Divide and Conquer strategy and recursion

// input is an array
// output is the sum of all element values in the array
// The base case is when there is 0 or only 1 value in the array
// The recursive case in when len > 1, the remaining array gets passed on

// Pseudocode
// 1. If length of array is <= 1 then simply return or return value of single element
// 2. If length > 1 then you'll return sum of the first element and result of recursive call of the rest of the array
// 3. Code will execute until base case is reached

const recursiveSum = (arr) => {
	if (arr.length == 1) {
		return arr[0];
	} else if (arr.length > 1) {
		return arr[0] + recursiveSum(arr.slice(1));
	} else return;
};

console.log(recursiveSum([2, 4, 6]));
