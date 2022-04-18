/* Binary Search

   1. Function accepts a sorted array and a value
   2. Create a left pointer at the start of the array, and a right pointer at the end of the array
   3. Iterate while the left pointer is before the right pointer
      * Think about what conditions to use for the iteration
   4. Create a pointer in the middle
   5. If you find the value return its index position
   6. If the value is too small then move the left pointer up
   7. If the value is too large then move the right pointer down
   8. If you never find the value then return -1

 */

const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== value && start !== middle && end !== middle) {
    middle = Math.floor((start + end) / 2);

    if (value < arr[middle]) end = middle - 1;
    else start = middle + 1;
  }

  return arr[middle] === value ? middle : -1;
};

console.log(
  binarySearch([1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 15, 20], 15),
  binarySearch([1, 3, 4, 5], 8)
);
