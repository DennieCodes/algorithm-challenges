// Your task is to return an output string that translates an input string s by replacing each character in s with a
// number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"

// input: string
// output: a string representing the frequency of each character in the input string, separated by given sep character

// pseudocode
// ==========
// We want to return the result string
// Iterate through the input string and create key/value pairs of each char in one object, incrementing values when there
// are repeats.
// Iterate through the string again but for each char add the corresponding value to results along with sep character
// return result

const frequencySequence = (str, sep) => {
	let result = '';
	let charObj = {};

	for (let i = 0; i < str.length; i++) {
		charObj[str[i]] =
			charObj[str[i]] === undefined ? 1 : (charObj[str[i]] += 1);
	}

	for (let i = 0; i < str.length; i++) {
		result += charObj[str[i]] + sep;
	}

	return result.slice(0, result.length - 1);
};

// Top Codewars submission
function frequencysequenceLean(str, sep) {
	return str
		.split('')
		.map((v, i, arr) => arr.filter((vi) => vi === v).length)
		.join(sep);
}

const result = frequencysequenceLean('hello world', '-');
console.log(result);
