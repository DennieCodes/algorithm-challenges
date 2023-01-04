// Your task is to find all of the shoes with "black" in the name. Your function should filter these shoes, and return
// them in a "flat list" similarly to Part A. Here is an example of the console output:

// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Gucci, black leather laced sneakers, 900
// Here is an example of a flat list in code:

// var flatList = "First line\nSecond Line\nThird Line\n";
// console.log(flatList);
// Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that
// the "flat list" ends with a newline symbol.

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
function listAllBlackShoes(inventory) {
	let results = '';

	for (let i = 0; i < inventory.length; i++) {
		const { name } = inventory[i];
		const shoes = inventory[i].shoes;

		for (let j = 0; j < shoes.length; j++) {
			// search name for word: black
			const desc = shoes[j].name.split(' ');
			if (desc.indexOf('black') !== -1) {
				results = results.concat(
					`${name}, ${desc.join(' ')}, ${shoes[j].price}\n`
				);
			}
		}
	}

	return results;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertStringsEqual(actual, expected, testName) {
	if (expected === actual) {
		console.log('passed');
		return;
	}

	console.log(`FAILED [${testName}] Expected ${actual}, to be ${expected}`);
}

// TESTS CASES
const expected =
	'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n';
const actual = listAllBlackShoes(currentInventory);

assertStringsEqual(actual, expected, 'Expected and Actual strings to be equal');
