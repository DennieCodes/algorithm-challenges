/* Persistent Bugger

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of 
times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

Analysis
--------
Input: Positive parameter num
Output: Returns a value of input's multiplicative persistence
Constraints and Edge: Single digit value returns 0, input is assumed positive

Pseudocode
----------
1. You need a recursive function or iteration where you receive a number which is parsed into an array of string of each character.
2. If the length of the array is 1 then iteration/recursion is complete and return the count
3. else multiple the values of each array item and then continue iteration/recursion, increment count each time


*/

const persistence = (num) => {
	let count = 0;

	while (num.toString().length > 1) {
		num = num
			.toString()
			.split('')
			.reduce((prev, next) => prev * next);
		count++;
	}

	return count;
};

// console.log(`${persistence(39)}, ${persistence(4)}, ${persistence(25)},
//   ${persistence(99)}`);

console.log(`${persistence(999)}`);
