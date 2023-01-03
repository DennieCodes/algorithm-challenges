// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
	var doesEveryElementMatch = true;

	for (var i = 0; i < array.length; i++) {
		doesEveryElementMatch = callbackFunction(array[i]);
		if (doesEveryElementMatch === false) return false;
	}

	return doesEveryElementMatch;
}

function returnValue(itemValue) {
	return itemValue;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
	if (expected === actual) {
		console.log('passed');
	} else {
		console.log(`FAILED [${testName}]`);
	}

	return;
}

// TESTS CASES
const testArr = [true, true, false, true, true];
const result1 = every(testArr, returnValue);
assertEqual(result1, false, 'Test every function for correct return values');
