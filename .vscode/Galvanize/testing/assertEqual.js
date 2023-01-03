function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('passed');
	} else {
		console.log(`FAILED [${testName}] Expected "4", but got "5"`);
	}
}
