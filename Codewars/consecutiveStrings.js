// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// input: an array of strings, a k number of array elements to add together
// output: a string made of the longest combination of elements from array of k elements, if there are more than
//         one string of the longest length return the first one.
// note: if arr.length = 0, k is greater than arr.length, k <= 0, then return ""

// pseudocode
// 1. iterate across the input array, stopping k length from end
//    note: we stop k length since we're collecting strings of size k
// 2. collect strings of k length from each element position
// 3. compare longest string at the end (or first of longest) and return

// FUNCTION
const consecutiveStrings = (strarr, k) => {
	if (strarr.length === 0 || k > strarr.length || k <= 0) {
		return '';
	}

	let result = strarr.map((ele, idx, arr) => {
		return arr.slice(idx, idx + k).join('');
	});

	return result.reduce((acc, cur) => (cur.length > acc.length ? cur : acc));
};

// ASSERTIONS
const assertToBeEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log('passed');
	} else {
		console.log(`FAILED [${testName}] Expected ${actual}, to be ${expected}`);
	}
};

// TEST CASE
const testName =
	'It should return the longest string combo on k number of elements';
// const actual = consecutiveStrings(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2);
// const expected = "folingtrashy";
// assertToBeEquals(actual, expected, 'It should return the longest string combo on k number of elements');

let actual = consecutiveStrings(
	['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'],
	2
);
let expected = 'abigailtheta';
assertToBeEquals(actual, expected, testName);

// let actual = consecutiveStrings(
// 	[
// 		'ejjjjmmtthh',
// 		'zxxuueeg',
// 		'aanlljrrrxx',
// 		'dqqqaaabbb',
// 		'oocccffuucccjjjkkkjyyyeehh',
// 	],
// 	1
// );
// let expected = 'oocccffuucccjjjkkkjyyyeehh';
// assertToBeEquals(actual, expected, testName);

// let actual = consecutiveStrings(
// 	[
// 		'ejjjjmmtthh',
// 		'zxxuueeg',
// 		'aanlljrrrxx',
// 		'dqqqaaabbb',
// 		'oocccffuucccjjjkkkjyyyeehh',
// 	],
// 	1
// );
// let expected = 'oocccffuucccjjjkkkjyyyeehh';
// assertToBeEquals(actual, expected, testName);

// let actual = consecutiveStrings(
// 	[
// 		'itvayloxrp',
// 		'wkppqsztdkmvcuwvereiupccauycnjutlv',
// 		'vweqilsfytihvrzlaodfixoyxvyuyvgpck',
// 	],
// 	2
// );
// let expected =
// 	'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck';
// assertToBeEquals(actual, expected, testName);
