// DESCRIPTION:
// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2
// You can assume that the two input strings are of equal length.

// input: two strings
// output: count of different positions which don't match

// 1. Convert strings into arrays
// 2. Filter comparing the strings position by position, this return an array of filtered items
// 3. Take length of filtered items and return it's value

// FUNCTIONS
const hamming = (str1, str2) => {
	return str1
		.split('')
		.filter((ele, idx, arr) => (ele !== str2[idx] ? ele : '')).length;
};

// ASSERTIONS
const assertToBeEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log('passed');
	} else {
		console.log(`FAILED [$testName] Expected ${actual}, to be ${expected}`);
	}
};

// TEST CASES
const testName = 'Expected count of positions to be equal to test value';
// const actual = hamming("I like turtles", "I like turkeys");
// const expected = 3;

// const actual = hamming("Hello World", "Hello World");
// const expected = 0;

const actual = hamming('espresso', 'Expresso');
const expected = 2;

assertToBeEquals(actual, expected, testName);
