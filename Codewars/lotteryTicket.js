// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

// input: a win number and an array of sub-arrays.  Each subarray will have a string and an integer
// output: 'Winner!' or 'Loser!'

// // [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// FUNCTIONS
const bingo = (ticket, win) => {
	let miniWin = 0;

	for (let i = 0; i < ticket.length; i++) {
		let [subString, subWin] = ticket[i];

		for (let j = 0; j < subString.length; j++) {
			if (subString.charCodeAt(j) === subWin) {
				miniWin++;
				break;
			}
		}
	}

	if (miniWin >= win) {
		return 'Winner!';
	} else {
		return 'Loser!';
	}
};

function bingoLean(ticket, win) {
	if (
		ticket.filter((a) => a[0].split('').some((b) => b.charCodeAt(0) == a[1]))
			.length >= win
	) {
		return 'Winner!';
	}
	return 'Loser!';
}

// ASSERTIONS
const assertToBeEqual = (actual, expected, testName) => {
	if (actual === expected) {
		console.log('passed');
	} else {
		console.log(`FAILED [${testName}] Expected ${actual}, to be ${expected}`);
	}
};

// TEST CASE
// const actual = bingo([ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ], 1);
// const expected = 'Winner!';

const actual = bingo(
	[
		['MDRMF', 77],
		['KFIMV', 72],
		['OTPYOI', 85],
		['XXD', 88],
		['UYJ', 74],
		['RX', 69],
		['HYAR', 88],
	],
	4
);
const expected = 'Loser!';

assertToBeEqual(
	actual,
	expected,
	'It should return Winner or Loser based on input'
);
