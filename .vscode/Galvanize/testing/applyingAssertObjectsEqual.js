// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
	var firstName = obj.firstName;
	var lastName = obj.lastName;

	if (firstName && lastName) {
		obj.fullName = firstName + ' ' + lastName;
	}

	return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
	for (let key of Object.keys(expected)) {
		if (actual[key] === undefined || actual[key] !== expected[key]) {
			console.log(`FAILED [${testName}]`);
			return;
		}
	}

	console.log('passed');
}

// TESTS CASES
const actual = addFullNameProp({
	firstName: 'Heidi',
	lastName: 'Chan',
});

const expected = {
	firstName: 'Heidi',
	lastName: 'Chan',
	fullName: 'Heidi Chan',
};

assertObjectsEqual(
	actual,
	expected,
	'Object should have fullname key and value'
);
