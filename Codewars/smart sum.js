// Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments.
// But be careful, some of your arguments can be arrays of numbers or nested arrays.

// smartSum(1,2,3,[4,5],6); // returns 21
// smartSum(1,2,[[3,4],5],6); // returns 21

// FUNCTIONS
const smartSum = (...arguments) => {
	return arguments.reduce((acc, cur) => {
		if (Array.isArray(cur)) {
			return acc + smartSum(...cur);
		} else {
			return acc + cur;
		}
	}, 0);
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
const testName = 'It should return the sum value of all elements';

// const actual = smartSum(1, 2, 3, 4, 5, 6);
const actual = smartSum(1, 2, 3, [4, 5], 6);
const expected = 21;
assertToBeEquals(actual, expected, testName);
