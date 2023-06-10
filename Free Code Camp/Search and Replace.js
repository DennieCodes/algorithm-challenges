/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you 
mean to replace the word Book with the word dog, it should be replaced as Dog

input: 
  1. string to perform search and replace on
  2. string, word to be replaced
  3. string, word to replace

output: string with the new sentence

note: preserve the case of the first character in the word to be replaced

pseudocode
1. Separate the string into an array of strings for processing
2. Find the word to be replace using indexOf(word)
3. Check case of first letter
4. Replace word with one provided, match case if applicable
5. Convert array into string using join
*/

function myReplace(str, before, after) {
	// const result = str.split(' ');
	// const wordIdx = result.indexOf(before);
	// const upperCase = before[0] !== before[0].toLowerCase() ? true : false;
	// const newWord = upperCase ? after[0].toUpperCase() + after.slice(1) : after;
	// result[wordIdx] = newWord;
	// return result.join(' ');

	// Refactor
	return str
		.split(' ')
		.map((ele) => {
			if (ele === before) {
				if (before[0] === before[0].toUpperCase()) {
					return after[0].toUpperCase() + after.slice(1);
				}
				return after[0].toLowerCase() + after.slice(1);
			}

			return ele;
		})
		.join(' ');
}

// const result = myReplace(
// 	'A quick brown fox jumped over the lazy dog',
// 	'jumped',
// 	'leaped',
// );
// const result = myReplace('Let us go to the store', 'store', 'mall');
// const result = myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting');
const result = myReplace('I think we should look up there', 'up', 'Down');
console.log(result);
