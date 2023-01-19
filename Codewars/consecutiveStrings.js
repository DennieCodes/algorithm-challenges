// FUNCTION
const consecutiveStrings = (arr, k) => {
	if (arr.length === 0 || k > arr.length || k <= 0) {
		return '';
	}

	let result = '';
	let comboEle = '';

	for (let i = 0; i < arr.length; i++) {
		if (comboEle === '') {
			for (let j = 0; j < k; j++) {}
		}

		result = comboEle.length > result.length ? comboEle : result;
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
// const actual = consecutiveStrings(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2);
// const expected = "folingtrashy";
// // const notExpected = "abcdefuvwxyz";
// assertToBeEquals(actual, expected, 'It should return the longest string combo on k number of elements');

let actual = consecutiveStrings(
	['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'],
	2
);
let expected = 'abigailtheta';
const testName =
	'It should return the longest string combo on k number of elements';
// assertToBeEquals(actual, expected, testName);

// let actual = consecutiveStrings(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1);
// expected = "oocccffuucccjjjkkkjyyyeehh";
// assertToBeEquals(actual, expected, testName);
