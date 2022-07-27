/*

Quicksort is an algorithm that works by dividing into two arrays a smaller portion and a larger portion than one value (pivot) in the
array.  These smaller arrays will be added to the pivot but after each portioned array is itself run through recursive calls to quicksort

input: unsorted array
output: sorted array
edge case: if there are 0 or 1 array elements then they're already sorted

pseudocode
----------
1. Function is called with an array
2. If array length is < 2 then return the array
3. Set a pivot value from the array
4. Filter through the array for any value lesser than the pivot
5. Filter through the array for any value greater than the pivot
6. The return statement will be returning the lesser array, the pivot and the greater array
7. However, the two arrays will themselves make recursive calls to quick sort until all base cases are reached

*/

const quickSort = (arr) => {
	if (arr.length < 2) return arr;

	const pivot = arr[0];
	const lesser = arr.filter((value) => value < pivot);
	console.log('Lesser', lesser);

	const greater = arr.filter((value) => value > pivot);
	console.log('Greater', greater);

	return quickSort(lesser) + pivot + quickSort(greater);
};

console.log(quickSort([1, 4, 3, 2, 6, 7, 9]));
