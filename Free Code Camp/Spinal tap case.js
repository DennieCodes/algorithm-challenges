/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

input: string
output: same string in lowercase with all words joined by dashes

note:
1. A capital letter denotes another word.
2. Underscore is another way to denote word separation

pseudocode:
1. convert to array
2. join to conver to string with dashes separating
3. change to lowercase
4. return

*/

function spinalCase(str) {
	return str.split('').reduce((acc, cur, idx) => {
		if (cur === ' ' || cur === '_') {
			return acc + '-';
		}
		const lower = cur.toLowerCase();
		if (cur !== lower) {
			return acc[idx] !== '-' && idx !== 0 && acc[idx - 1] !== '-'
				? acc + '-' + lower
				: acc + lower;
		}

		return acc + cur;
	}, '');
}

// const result = spinalCase('This Is Spinal Tap');
// const result = spinalCase('Teletubbies say Eh-oh');
// const result = spinalCase('thisIsSpinalTap');
const result = spinalCase('AllThe-small Things');
console.log(result);
