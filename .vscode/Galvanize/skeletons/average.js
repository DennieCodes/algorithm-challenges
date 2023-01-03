// Skeleton

// FUNCTION DEFINITION(S)
function sum(numbers) {
	return numbers.reduce((acc, cur) => acc + cur);
}

function average(numbers) {
	const sumOfNumber = sum(numbers);

	return sumOfNumber / numbers.length;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('passed');
	}

	console.log(`FAILED [${testName}] expected ${expected}, to b ${actual}`);
}

// TESTS CASES
const numbers = [1, 2, 3, 4];
const averageOfSum = average(numbers);

assertEqual(averageOfSum, 2.5, 'Test average function returns average');
