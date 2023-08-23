/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

input: str
output: str with missing letter or undefined if all letters are present

note:
use charCodeAt() to retrieve value of letter
use fromCharCode() to convert value of code to letter

pseudocode:
1. iterate from first letter in str to last letter in string
2. use a 2 element array to compare previous value to current value
3. use charCodeAt to compare that they are only 1 number apart
4. if not then return string value from +1 previous letter's unicode value
*/

function fearNotLetter(str) {
	let prev = str.charCodeAt(0);

	for (let i = 1; i < str.length; i++) {
		if (prev + 1 !== str.charCodeAt(i)) {
			return String.fromCharCode(prev + 1);
		} else {
			prev = str.charCodeAt(i);
		}
	}

	return undefined;
}

const result = fearNotLetter('abce');
console.log(result);
