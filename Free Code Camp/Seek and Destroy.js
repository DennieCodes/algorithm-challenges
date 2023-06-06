/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or 
more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

input: an initial array (first arg), followed by one or more subsequent args
output: initial array with all elements removed with same value as subsequent args

pseudocode
1. take the first argument into result array
2. iterate according to length of arguments
3. remove from the results all items in arguments array from results
4. return array
*/

function destroyer(arr) {
	let result = arr;

	for (let i = 1; i < arguments.length; i++) {
		if (result.includes(arguments[i])) {
			result = result.filter((ele) => ele !== arguments[i]);
		}
	}

	return result;
}

const result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result);
