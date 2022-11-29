// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray
// of size ‘k’.

const max_sum_subarray_of_size_k = (k, arr) => {
	let maxSum = 0,
		windowSum = 0,
		windowStart = 0;

	for (window_end = 0; window_end < arr.length; window_end++) {
		windowSum += arr[window_end]; // Add the next element
		// Slide the window when window is size of k
		if (window_end >= k - 1) {
			maxSum = Math.max(maxSum, windowSum);
			windowSum -= arr[windowStart]; // Subtract the element going out
			windowStart += 1;
		}
	}
	return maxSum;
};

const testArr1 = [2, 1, 5, 1, 3, 2];
const testArr2 = [2, 3, 4, 1, 5];

console.log(
	`Maximum sum of a subarray of size K: ${max_sum_subarray_of_size_k(
		3,
		testArr1
	)}`
);

console.log(
	`Maximum sum of a subarray of size K: ${max_sum_subarray_of_size_k(
		2,
		testArr2
	)}`
);
