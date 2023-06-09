/* Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, 
and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

input: string containing one word
output: string formatted in pig latin

notes:
1. a word beginning with consonants should have first consonant or cluster moved to the end with 'ay' added to it.
2. a words beginning with a vowel just add 'way' to the end

pseudocode:
1. check if first letter of word is a vowel, if so add way to the end and update
2. since we know first letter isn't a vowel, iterate over word until a vowel is present
   take the consonant(s), move to end of word and add 'ay'
3. return the string
*/

function translatePigLatin(str) {
	const checkVowel = (letter) => {
		return letter.search(/[aeiou]/gi) !== -1 ? true : false;
	};
	let consonants = '';

	if (checkVowel(str[0])) {
		return str + 'way';
	}

	do {
		consonants = consonants + str[0];
		str = str.slice(1, str.length);
		if (str.length === 0) break;
	} while (!checkVowel(str[0]));

	return str + consonants + 'ay';
}

const result = translatePigLatin('rhythm');
// const result = translatePigLatin('algorithm');
console.log(result);
