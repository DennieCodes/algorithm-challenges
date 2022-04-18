// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

const pair_with_target_sum = (arr, target_num) => {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    const sum = arr[left] + arr[right];

    if (sum === target_num) return [left, right];

    if (sum > target_num) {
      right -= 1;
    } else if (sum < target_num) {
      left += 1;
    }
  }
  return [-1, -1];
};

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 45));

/* An Alternate approach #
Instead of using a two-pointer or a binary search approach, we can utilize a HashTable to search for the required pair. 
We can iterate through the array one number at a time. Let’s say during our iteration we are at number ‘X’, so we need to find ‘Y’ 
such that “X + Y == Target”. We will do two things here:

Search for ‘Y’ (which is equivalent to “Target - X”) in the HashTable. If it is there, we have found the required pair.
Otherwise, insert “X” in the HashTable, so that we can search it for the later numbers. */

const pair_with_target_sum_hash = (arr, target_num) => {
  // Create a Hash Table X
  // Iterate through the array one number at a time
  // Check if array at current index and some value in X equals to target_num
  // if not then add array value at index to X
  // If so then return position of value in X and current index
};
