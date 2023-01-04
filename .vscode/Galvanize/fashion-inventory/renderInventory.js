// Write a function that will take in this currentInventory array as its argument. Your function should access all the
// shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}
// {designer name} - {shoe name} - {price}

// //...console output:
// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, tasselled green low-top lace-up, 1100
// // and so on...
// Here is an example of a flat list in code:

// var flatList = "First line\nSecond Line\nThird Line\n";
// console.log(flatList);
// Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that
// the "flat list" ends with a newline symbol. There are, like all of the challenges in this course, tests attached to
// these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

// Hint: the return value is a string.

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

function renderInventory(inventory) {
	let flatList = '';

	for (let i = 0; i < inventory.length; i++) {
		for (let j = 0; j < inventory[i]['shoes'].length; j++) {
			const designer = inventory[i].name;
			const { name, price } = inventory[i]['shoes'][j];

			flatList = flatList.concat(`${designer}, ${name}, ${price}\n`);
		}
	}

	return flatList;
}

// ASSERTION FUNCTION(S) TO BE USED
const assertStringEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log('passed');
		return;
	}

	console.log(`FAILED [${testName}] Expected ${actual}, to be ${expected}`);
};

// TESTS CASES
const expected =
	'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n';
const actual = renderInventory(currentInventory);

assertStringEquals(
	actual,
	expected,
	'Check if actual string equals expected string results'
);
