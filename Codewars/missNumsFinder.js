// We have a big list having values fom 1 to n, occurring only once but unordered with an unknown amount of missing values. The number n will be considered the maximum value of the array.

// We have to output the missing numbers sorted by value. Example:

// [8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12]  ---> [2, 4, 9, 13]
// The number 1 should be in the input array, if it's not present in the input array, should be included in the results. See the example below.

// [8, 10, 11, 7, 3, 15, 6, 14, 5, 12]  ---> [1, 2, 4, 9, 13]
// As this is a hardcore version, the tests are prepared for only algorithms of time complexityO(n) to pass. As the speed of each language are different, we will have different maximum lengths for the input.

// Features of the random tests:
// 1000 <= length of arrays <= 30.000.000
// 1 <= amount of missing numbers <= 10
// amount of tests: 20

// input: an array of unsorted numbers from 1 to n.  n is the largest number in the array
// output: an array of the missing numbers from the input

// since arrays have a numbered indexing system we can use that to sort our array in place
// from the start, compare that element's value with value of it's index
// if it's not the same then take the current element and put it in it's respective index position
// note: what happens if that index position is larger than the current array

// [8, 10, 11, 7, 3, 15, 6, 14, 5, 12]  ---> [1, 2, 4, 9, 13]
//                           _
// [14, 10, 11, 7, 3, 15, 6, 8, 5, 12]
// [14, 10, 11, 7, 3, 15, 6, 8, 5, 12, , , , 14]
// [10, 11, 7, 3, 15, 6, 8, 5, 12, , , , 14]

// FUNCTION
const missNumsFinder = (arr) => {
	let i = 0;
	let maxValue = arr.length;

	while (i < 20) {
		// maxValue = Math.max(maxValue, arr[i]);

		if (arr[i] !== arr[arr[i]]) {
			if (arr[arr[i]] === undefined) {
				arr[arr[i]] = arr[i];
				arr.splice(i, 1);
			} else {
				let temp = arr[arr[i]];
				arr[arr[i]] = arr[i];
				arr[i] = temp;
				// [arr[i], arr[arr[i]]] = [arr[arr[i]], arr[i]];
			}

			// console.log(arr);
			// i++;
		} else {
			i++;
		}

		if (i > 20) exit;
	}
};

// ASSERTION
const assertToBeEquals = (actual, expected, testName) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log('passed');
	} else {
		console.log(`FAILED [${testName}] Expected ${actual}, to be ${expected}`);
	}
};

// TEST CASE
const actual = missNumsFinder([8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12]);
const expected = [1, 2, 4, 9, 13];
assertToBeEquals(
	actual,
	expected,
	'It should return array of missing numbers from input array'
);
