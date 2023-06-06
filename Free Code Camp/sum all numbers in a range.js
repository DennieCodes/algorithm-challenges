/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers 
between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

input: an array of two numbers
output: an integer of sum of those two numbers and all of the numbers between them

note: the lowest number may not come first

*/

function sumAll(arr) {
	const sortedArr = [...arr].sort((a, b) => a - b);
	let result = 0;

	for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
		result += i;
	}

	return result;
}

// const result = sumAll([4, 1]);
const result = sumAll([5, 10]);

console.log(result);
