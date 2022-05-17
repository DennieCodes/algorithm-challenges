/*

You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0

If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Note: This is the description but the test for this kata have it so every pair is counted


Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)

*/

const duplicate = (arr) => {
	if (arr.length <= 1 || arr === null) return 0;

	const arrayItemsCount = {};
	let count = 0;

	for (const key of arr) {
		arrayItemsCount[key] = arrayItemsCount[key]
			? (arrayItemsCount[key] += 1)
			: 1;
	}

	for (const key in arrayItemsCount) {
		if (arrayItemsCount[key] >= 2) {
			count += Math.floor(arrayItemsCount[key] / 2);
		}
	}
	return count;
};

duplicate([]);
duplicate([1, 2, 5, 6, 5, 2]);
duplicate([1, 2, 2, 20, 6, 20, 2, 6, 2]);
duplicate([0, 0, 0, 0, 0, 0, 0]);
duplicate([1000, 1000]);

/*

Some alternative solutions submitted:

function duplicates(array) {
  let res = 0, odd = new Set();
  for (let x of array) {
    if (odd.delete(x))
      res++;
    else
      odd.add(x);
  }
  return res;
}

function duplicates(array){
//Make the magic happen
  const newArray = array.sort((a,b) => a-b);
  if (newArray.length <= 1) return 0;
  
  let count = 0;
  
  for (let i = 0; i < newArray.length ; i++) {
    if (newArray[i] == newArray[i+1]) {
      count++;
      i++;
    }
  }
  return count;
}

*/
