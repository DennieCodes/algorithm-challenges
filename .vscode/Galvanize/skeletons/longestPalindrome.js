// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
	// split sentence into words
	const words = sentence.split(' ');
	// iterate words and collect the palindromes
	let palindromes = [];

	for (let i = 0; i < words.length; i++) {
		if (isPalindrome(words[i])) {
			palindromes.push(words[i]);
		}
	}

	// sort the list of palindromes by word length
	for (let i = 0; i < palindromes.length - 1; i++) {
		// if (palindromes[i].length > palindromes[i+1].length) {
		if (sortAscendingByLength(palindromes[i], palindromes[i + 1]) === 1) {
			[palindromes[i + 1], palindromes[i]] = [
				palindromes[i],
				palindromes[i + 1],
			];
		}
	}

	// return the largest item in the sorted list
	return palindromes[palindromes.length - 1];
}

function reverseString(string) {
	return string.split('').reverse().join('');
}

function isPalindrome(word) {
	if (reverseString(word) === word) return true;
}

function sortAscendingByLength(a, b) {
	if (a.length > b.length) {
		return 1;
	} else if (a.length < b.length) {
		return -1;
	}
	return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
const assertToBeEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log('passed');
		return;
	}

	console.log(`FAILED [${testName}] expected ${actual}, to be ${expected}`);
};

// TESTS CASES
const actual = findLongestPalindrome('The level up mom dad');
assertToBeEquals(
	actual,
	'level',
	'Test function to return longest palindrome in string'
);
