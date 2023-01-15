// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'

// input: string, n = size of chunk
// output: string, of input with every n sized chunk reversed

// Take n sized chunks, reverse these chunks
// Place reversed chunks into a variable
// Return results at the end

// FUNCTIONS
const flipEveryNChars = (input, n) => {
	let reverse = input.split('');
	let result = '';

	// Iterate the entire length of the string until the end
	for (let i = 0; i < input.length; i += n) {
		result = result.concat(
			reverse
				.slice(i, i + n)
				.reverse()
				.join('')
		);
	}

	return result;
};

// ASSERTIONS
const assertToBeEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log('passed');
	} else {
		console.log(`FAILED [${testName}] Expected ${actual}, to be ${expected}`);
	}
};

// TEST CASE
const expected = 'ohs axe trelpma';
const actual = flipEveryNChars('a short example', 5);
assertToBeEquals(
	actual,
	expected,
	'It should return a modified string from input to expected value'
);
