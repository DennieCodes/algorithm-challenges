/*

Write a function called "countWords". You may want to look at the split method on the JavaScript String object.

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

If given an empty string, it should return an empty object.

input: string
output: object containing each word as key and it's # of appearances as values
note: empty string returns an empty object
*/

function countWords(str) {
	if (str.length === 0) {
		return {};
	}
	result = {};

	// words = str.split(' ');

	str
		.split(' ')
		.forEach(
			(ele) =>
				(result[ele] = result[ele] === undefined ? 1 : (result[ele] += 1)),
		);

	return result;
}

let output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
