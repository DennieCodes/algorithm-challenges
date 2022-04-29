/* Problem Statement #
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9] 

Analysis
--------
Inputs: Sorted Array
Output: New array with squares of all numbers from the input array also in sorted order

Note: There are many ways to solve but this challenge is to use two pointers which can be helpful with negative numbers

Pseudocode
----------
0. Create a new blank array to return
1. Start pointers at either end of the sorted input array
2. Square array items at both pointers
3. Which square value is greater then unshift it first onto new array then go next iteration to compare
4. Move pointers inward by one continue until pointers are at same item
5. Add last item and reutrn new array


*/

const make_squares = (arr) => {
  const returnArray = Array(arr.length).fill(0);

  let leftPointer = 0,
    rightPointer = arr.length - 1;

  do {
    const leftSquared = arr[leftPointer];
    const rightSquared = arr[rightPointer];

    if (leftSquared > rightSquared) {
      returnArray.unshift(leftSquared * leftSquared);
      returnArray.unshift(rightSquared * rightSquared);
    } else if (rightSquared > leftSquared) {
      returnArray.unshift(rightSquared * rightSquared);
      returnArray.unshift(leftSquared * leftSquared);
    } else if (leftSquared === rightSquared) {
      returnArray.unshift(rightSquared * rightSquared);
      returnArray.unshift(leftSquared * leftSquared);
    } else if (leftPointer === rightPointer) {
      returnArray.unshift(leftSquared * leftSquared);
      return returnArray;
    }

    leftPointer++;
    rightPointer--;
    console.log(`Left: ${leftPointer}, Right: ${rightPointer}`);
  } while (returnArray.length !== arr.length);

  return returnArray;
};

console.log(make_squares([-2, -1, 0, 2, 3]));
