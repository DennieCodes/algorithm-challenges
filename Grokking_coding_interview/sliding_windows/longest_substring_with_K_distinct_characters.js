// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// input: str = string to be analyzed
//        k = # of distinct characters to search for
// output: length of the longest substring that has no more than K distinct characters
//
// pseudocode

const longest_substring_with_K_distinct_characters = (str, k) => {
	let windowStart = 0,
		maxLength = 0,
		charFrequency = {};

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		const rightChar = str[windowEnd];

		if (!(rightChar in charFrequency)) {
			charFrequency[rightChar] = 0;
		}
		charFrequency[rightChar] += 1;

		while (Object.keys(charFrequency).length > k) {
			const leftChar = str[windowStart];
			charFrequency[leftChar] -= 1;
			if (charFrequency[leftChar] === 0) {
				delete charFrequency[leftChar];
			}
			windowStart += 1;
		}
		// remember the maximum length so far
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
	}

	return maxLength;
};

console.log(
	`Length of the longest substring: ${longest_substring_with_K_distinct_characters(
		'araaci',
		2
	)}`
);

console.log(
	`Length of the longest substring: ${longest_substring_with_K_distinct_characters(
		'araaci',
		1
	)}`
);

console.log(
	`Length of the longest substring: ${longest_substring_with_K_distinct_characters(
		'cbbebi',
		3
	)}`
);
