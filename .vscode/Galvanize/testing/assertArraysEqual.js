function assertArraysEqual(actual, expected, testName) {
	const equalLen = actual.length === expected.length ? true : false;
	let equalValue = true;

	for (let i = 0; i < actual.length; i++) {
		if (actual[i] !== expected[i]) equalValue = false;
	}

	if (equalLen && equalValue) {
		console.log('passed');
		return;
	}

	const actualStr = actual.join(',');
	const expectedStr = expected.join(',');

	console.log(
		`FAILED [${testName}] Expected "${expectedStr}", but got "${actualStr}"`
	);
}
