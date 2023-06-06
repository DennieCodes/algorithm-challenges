/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not 
   both. In other words, return the symmetric difference of the two arrays.

   Note: You can return the array with its elements in any order.

  input: two arrays
  output: an array of elements that are only found in one of the arrays and not the other

  note: the arrays may not be the same length and you can return your array in any order

  pseudocode: 
  1. iterate over both array, making sure to iterate to the last element of the larger array
  2. compare both arrays using includes to determine when a unique value appears
  3. Push the unique value onto return array
*/

function diffArray(arr1, arr2) {
	const newArr = arr1;

	for (let i = 0; i < arr2.length; i++) {
		if (newArr.includes(arr2[i])) {
			// Pop off array
			const pos = newArr.indexOf(arr2[i]); // position of present item
			newArr.splice(pos, 1);
		} else {
			newArr.push(arr2[i]);
		}
	}

	return newArr;
}

const result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(result);
