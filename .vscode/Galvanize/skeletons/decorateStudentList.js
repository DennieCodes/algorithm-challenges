// DATA SETS
const classList = [
	'Joe',
	'Jack',
	'John',
	'Fred',
	'Frank',
	'Barry',
	'Larry',
	'Mary',
	'Harry',
	'Farrell',
	'Susan',
	'Monica',
	'Keira',
	'Caroline',
	'Harriet',
	'Erica',
	'Luann',
	'Cheryl',
	'Beth',
	'Rupa',
	'Linda',
	'Allison',
	'Nancy',
	'Dora',
];

const resultList = [
	{ name: 'Jack', age: 11 },
	{ name: 'Jack', age: 10 },
	{ name: 'John', age: 10 },
	{ name: 'Fred', age: 11 },
	{ name: 'Frank', age: 11 },
	{ name: 'Barry', age: 10 },
	{ name: 'Larry', age: 11 },
	{ name: 'Mary', age: 11 },
	{ name: 'Harry', age: 10 },
	{ name: 'Farrell', age: 11 },
	{ name: 'Susan', age: 11 },
	{ name: 'Monica', age: 11 },
	{ name: 'Keira', age: 10 },
	{ name: 'Caroline', age: 10 },
	{ name: 'Harriet', age: 11 },
	{ name: 'Erica', age: 10 },
	{ name: 'Luann', age: 10 },
	{ name: 'Cheryl', age: 11 },
	{ name: 'Beth', age: 10 },
	{ name: 'Rupa', age: 11 },
	{ name: 'Linda', age: 11 },
	{ name: 'Allison', age: 11 },
	{ name: 'Nancy', age: 10 },
	{ name: 'Dora', age: 11 },
];

// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
	// creates an object for each string in the input array, with an age of 10 or 11
	let students = [];

	for (let student of classList) {
		let newStudent = {};
		newStudent.name = student;
		newStudent.age = getRandomIntInclusive(10, 11);
		students.push(newStudent);
	}
	// returns an array of these objects
	return students;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEquals(actual, expected, testName) {
	if (actual.length === expected.length) {
		for (let i = 0; i < actual.length; i++) {
			if (
				actual[i].name !== expected[i].name ||
				actual[i].age !== actual[i].age
			) {
				console.log(`FAILED [${testName}]`);
				return;
			}
		}
	}
	console.log('passed');
}

// TESTS CASES
const result = decorateClassListWithAges(classList);
assertEquals(result, resultList, 'Compare array');
