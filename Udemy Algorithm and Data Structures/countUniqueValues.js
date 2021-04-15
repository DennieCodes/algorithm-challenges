/* countUniqueValues receives a sorted array, and counts the unique values in the array.
   There can be negative numbers in the array but it will always be sorted

*/

// The other strategy is to use two pointers from the start
// If the values are the same, move the second one ahead, repeat
// If the values are different then move the first ahead and set the value to the second
// continue until the second pointer reaches the end

// Solution using object
const countUniqueValues = (arr) => {
  // Return 0 on empty array
  if (arr.length === 0) return 0;

  let uniqueObj = {};

  for (let item of arr) {
    uniqueObj[item] = uniqueObj[item] + 1;
  }

  return Object.keys(uniqueObj).length;
};

// Solution using multiple pointers from start to finish
const countUniqueValuesV2 = (arr) => {
  let leftPointer = 0;
  let rightPointer = 0;

  // Return 0 on empty array
  if (arr.length === 0) return 0;

  while (rightPointer <= arr.length - 1) {
    // Compare values of arr at both positions
    if (arr[leftPointer] === arr[rightPointer]) {
      // Advance the right pointer if both values are the same
      rightPointer++;
    } else {
      leftPointer++;
      arr[leftPointer] = arr[rightPointer];
      rightPointer++;
    }
  }

  // Return the value of leftPointer (+1) which represents the # of unique values
  return leftPointer + 1;
};

console.log(
  // countUniqueValues([1, 1, 1, 1, 2]),
  countUniqueValues([1, 1, 1, 2, 2, 3])
  // countUniqueValues([1, 2, 3, 3, 4, 5]),
  // countUniqueValues([]),
  // countUniqueValues([1]),
  // countUniqueValues([-2, -1, -1, 0, 1])
);
