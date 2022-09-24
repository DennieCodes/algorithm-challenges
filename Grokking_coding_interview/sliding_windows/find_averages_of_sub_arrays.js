function find_averages_of_subarrays(K, arr) {
	const result = []; // The array that will be returned containing averages of the subarray
	let windowSum = 0.0;
	let windowStart = 0;

	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		windowSum += arr[windowEnd]; // Add the next element

		// Slide the window when the required window size of 'K' has been reached
		if (windowEnd >= K - 1) {
			result.push(windowSum / K); // Add the average of this subset to result array
			windowSum -= arr[windowStart]; // Take out the first element in the subset
			windowStart += 1; // Slide the window ahead
		}
	}

	return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays is: ${result}`);
