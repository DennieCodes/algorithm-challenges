// The task now is to find all the laced shoes, but we are going to render them in a somewhat complex format. Your
// function should return shoe names that contain "lace" in them, and indicate which word contains "lace". The return
// value's format should be structured like this:

var expectedResult = [
	{
		nameWords: ['tasselled', 'black', 'low-top', 'lace-up'],
		targetWordIndex: 3,
	},
	{
		nameWords: ['tasselled', 'green', 'low-top', 'lace-up'],
		targetWordIndex: 3,
	},
	{
		nameWords: ['red', 'leather', 'laced', 'sneakers'],
		targetWordIndex: 2,
	},
	{
		nameWords: ['black', 'leather', 'laced', 'sneakers'],
		targetWordIndex: 2,
	},
];

var currentInventory = [
	{
		name: 'Brunello Cucinelli',
		shoes: [
			{ name: 'tasselled black low-top lace-up', price: 1000 },
			{ name: 'tasselled green low-top lace-up', price: 1100 },
			{ name: 'plain beige suede moccasin', price: 950 },
			{ name: 'plain olive suede moccasin', price: 1050 },
		],
	},
	{
		name: 'Gucci',
		shoes: [
			{ name: 'red leather laced sneakers', price: 800 },
			{ name: 'black leather laced sneakers', price: 900 },
		],
	},
];

// FUNCTIONS
function generateLaceDetails(inventory) {
	let results = [];

	for (let i = 0; i < inventory.length; i++) {
		const shoes = inventory[i].shoes;

		for (let j = 0; j < shoes.length; j++) {
			const name = shoes[j].name.split(' ');
			let index = name.indexOf('laced');

			if (index === -1) {
				index = name.indexOf('lace-up');
			}

			if (index !== -1) {
				// if name contains lace push object onto results with key
				let hasLace = { nameWords: name };
				hasLace.targetWordIndex = index;
				results.push(hasLace);
			}
		}
	}

	return results;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysToBeEqual(actual, expected, testName) {
	let passed = true;

	if (actual.length === expected.length) {
		for (let i = 0; i < expected.length; i++) {
			if (actual[i].targetWordIndex !== expected[i].targetWordIndex) {
				passed = false;
				break;
			}

			for (let j = 0; j < actual[i].nameWords.length; j++) {
				if (actual[i].nameWords[j] !== expected[i].nameWords[j]) {
					console.log(
						`${actual[i].nameWords[j]} = ${expected[i].nameWords[j]}`
					);
					passed = false;
					break;
				}
			}
		}
	} else {
		passed = false;
	}

	if (passed === true) {
		console.log('passed');
	} else {
		console.log(actual);
		console.log(
			'FAILED [' + testName + '] expected ' + actual + ', to be ' + expected
		);
	}
}

// TESTS CASES
const actual = generateLaceDetails(currentInventory);

assertArraysToBeEqual(
	actual,
	expectedResult,
	'Check array actual to equals array expected'
);
