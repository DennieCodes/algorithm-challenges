// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
	var newArray = [];

	for (var i = 0; i < array.length; i++) {
		newArray.push(callbackFunction(array[i]));
	}

	return newArray;
}

function cubeAll(number) {
	return number * number * number;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, testName) {
	if (actual.length === expected.length) {
		let compare = true;

		for (let i = 0; i < actual.length; i++) {
			if (actual[i] !== expected[i]) {
				compare = false;
				break;
			}
		}
		if (compare) {
			console.log('passed');
			return;
		}
	}
	console.log(`FAILED [${testName}]`);
}

// TESTS CASES
const result = map([1, 2, 3], cubeAll);

assertArraysEqual(result, [1, 9, 27], 'create an array of cubed values');
