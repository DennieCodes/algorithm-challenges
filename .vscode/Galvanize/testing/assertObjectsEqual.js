function assertObjectsEqual(actual, expected, testName) {
	const strExpected = JSON.stringify(expected);
	const strActual = JSON.stringify(actual);

	if (strExpected === strActual) {
		console.log('passed');
	} else {
		console.log(
			`FAILED [${testName}] Expected ${strExpected}, but got ${strActual}`
		);
	}
}
