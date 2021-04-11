/* 9. Palindrome-number
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?

*/

/* Pseudocode Steps
   1. If x is < 0 then return false
   2. if x == 0 return true
   3. If x % 0 === 0 then return false
   4. if x % tens === x, then tens is 10th larger and return from recursion
   5. if x % tens !== x, then take value of x / tens and store in 1st digit of return variable,    
*/

/* Post-submission
   Note: Another approach is to check the second half of the number so if it's 1221, then check if 21 = 12
         or check as you go along to exit out from the algorithm.
*/

const isPalindrome = function(x) {
  if (x === 0) {
    return true;
  } else if (x < 0 || x % 10 === 0) { 
    return false; 
  } else {
    return parseInt(x, 10, 0) === x ? true : false;
  } 
};

function parseInt(x, tens, result) {
  if (x % tens === x) {    
    return result * 10 + Math.floor(x % tens / (tens/10));
  } else {
    result = result === 0 ? x % tens : result * 10 + Math.floor(x % tens / (tens/10));
    return parseInt(x, tens*10, result);
  }
}

console.log(isPalindrome(123));