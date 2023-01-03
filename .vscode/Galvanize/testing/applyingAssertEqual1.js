// FUNCTION DEFINITION(S)
function square(n) {
	return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('passed');
	} else {
		console.log(`FAILED [${testName}]`);
	}
}

// TESTS CASES
const result1 = square(2);
assertEqual(result1, 4, 'should return the square root of number');

const result2 = square(4);
assertEqual(result2, 16, 'should return the square root of number');
