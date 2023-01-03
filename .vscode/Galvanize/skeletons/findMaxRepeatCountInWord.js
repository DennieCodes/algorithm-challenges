// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
	// Break up individual word into individual letters.
	let count = {};

	// Count the instances of each letter
	for (let i = 0; i < word.length; i++) {
		count[word[i]] = count[word[i]] == undefined ? 1 : (count[word[i]] += 1);
	}

	let countArr = Object.values(count);
	let maxCount = 0;

	// Iterate all the counts and find the highest
	for (let item of countArr) {
		maxCount = Math.max(item, maxCount);
	}

	// Return this word's max repeat count
	return maxCount;
}

function findFirstWordWithMostRepeatedChars(text) {
	var maxRepeatCountOverall = 0;
	var wordWithMaxRepeatCount = '';

	// Break up input text into words (space-delimited).
	let textArr = text.split(' ');

	// For each word...
	// var repeatCountForWord = findMaxRepeatCountInWord(word)
	for (let word of textArr) {
		const charMaxCount = findMaxRepeatCountInWord(word);
		// If that max repeat count is higher than the overall max repeat count,
		if (charMaxCount > maxRepeatCountOverall) {
			// update maxRepeatCountOverall
			maxRepeatCountOverall = charMaxCount;
			// update wordWithMaxRepeatCount
			wordWithMaxRepeatCount = word;
		}
	}

	return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEquals(actual, expected, testName) {
	if (actual === expected) {
		console.log('passed');
		return;
	}

	console.log(`FAILED [${testName}] Expected ${actual}, to be ${expected}`);
}

// TESTS CASES
const actual = findFirstWordWithMostRepeatedChars('Heidi Chan');
assertEquals(actual, 'Chan', 'Find word with most unique characters');
