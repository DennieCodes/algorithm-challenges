// Your function should return the average cost of all shoes per designer in this format:

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

function calculateAverage(arr) {
	let average = 0;

	for (let i = 0; i < arr.length; i++) {
		average += arr[i].price;
	}

	return average / arr.length;
}

function calculateAveragePricePerDesigner(inventory) {
	const results = { designers: [] };

	for (let i = 0; i < inventory.length; i++) {
		let designer = {
			name: inventory[i].name,
			averagePrice: calculateAverage(inventory[i].shoes),
		};

		results.designers.push(designer);
	}

	return results;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
	const actDesigners = actual.designers;
	const expDesigners = expected.designers;
	let equals = true;

	if (actDesigners) {
		// Iterate over actual and expected's array value in designer key
		for (let i = 0; i < expDesigners.length; i++) {
			const { name: actName, averagePrice: actAvg } = actDesigners[i];
			const { name: expName, averagePrice: expAvg } = expDesigners[i];

			if (actName !== expName || actAvg !== expAvg) {
				equals = false;
			}
		}
	} else {
		equals = false;
	}

	if (equals) {
		console.log('passed');
	} else {
		console.log(`FAILED [${testName}] Expected ${actual}, to be ${expected} `);
	}
}

// TESTS CASES
var expected = {
	designers: [
		{
			name: 'Brunello Cucinelli',
			averagePrice: 1025,
		},
		{
			name: 'Gucci',
			averagePrice: 850,
		},
	],
};

const actual = calculateAveragePricePerDesigner(currentInventory);

assertObjectsEqual(
	actual,
	expected,
	'Test function for actual results on expected object'
);
