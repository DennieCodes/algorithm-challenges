/*

Write a function called "select".

Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.

If keys are present in the given array, but are not in the given object, it should ignore them
It does not modify the passed in object

input: array and object
output: output whose properties are those in the object and keys are in the array
*/

function select(arr, obj) {
	result = {};

	for (let item in obj) {
		if (arr.indexOf(item) !== -1) {
			result[item] = obj[item];
		}
	}

	return result;
}

let arr = ['a', 'c', 'e'];
let obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
};

let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
