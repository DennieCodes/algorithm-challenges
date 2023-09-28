/*
Write a function called "countWords".

Given a string (words separated by spaces), "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string. If given an empty string, your function should return an empty object.
*/

function countWords(stringOfWords) {
	if (stringOfWords.length === 0) return {};

	obj = {};
	arrayOfWords = stringOfWords.split(' ');

	for (let i = 0; i < arrayOfWords.length; i++) {
		obj[arrayOfWords[i]] =
			obj[arrayOfWords[i]] === undefined ? 1 : (obj[arrayOfWords[i]] += 1);
	}

	return obj;
}

let result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);
