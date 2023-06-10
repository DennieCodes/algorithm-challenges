/* Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, 
which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided 
DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

input: string
output: 2d array of matching pairs

note: AT and CG are how the pairing set works

pseudocode:
0. Create return array
1. Iterate over the string
2. Take whatever character and create an array with its pair
3. Push array to returning array
*/

function pairElement(str) {
	const result = [];

	for (let i in str) {
		const letter = str[i];
		switch (letter) {
			case 'A':
				result.push([letter, 'T']);
				break;
			case 'T':
				result.push([letter, 'A']);
				break;
			case 'C':
				result.push([letter, 'G']);
				break;
			case 'G':
				result.push([letter, 'C']);
				break;
		}
	}

	return result;
}

const result = pairElement('GCG');
// const result = pairElement("ATCGA");
// const result = pairElement("TTGAG");
// const result = pairElement("CTCTA");

console.log(result);
