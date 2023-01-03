// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
	// lowercase all chars to ignore case
	const formatted = text.toLowerCase();
	// add each char to a set
	let charSet = new Set();
	for (let i = 0; i < formatted.length; i++) {
		charSet.add(formatted[i]);
	}

	if (text.length === charSet.size) return true;
	return false;
}

// ASSERTION FUNCTION(S) TO BE USED
const assertIsEqual = (actual, expected, textName) => {
	if (actual === expected) {
		console.log('passed');
	} else {
		console.log(`FAILED [${textName}] Expected ${actual}, to be ${expected}`);
	}
};

// TESTS CASES
const expected = isIsogram('HAMLET');
assertIsEqual(true, true, 'Check if string is an Isogram');
