/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:

Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: 
[−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer 
overflows.
*/

let reverse = function(x) {
  // If x >= highest value of 32 bit unsigned int or x == 0, then return 0
  if (x >= Math.pow(2,31)-1 || x === 0) {
    return 0;
  }

  // Trim trailing zeros from x
  let tens = 10;
  while (x % tens === 0) {
    tens *= 10;
    
    if (x % tens !== 0) {
      x /= (tens/10);
      break;
    }
  } 

  // capture value to ensure that returned value is not greater than Math.pow(2,31) -1, positive or negative
  let result = parseInt(Math.abs(x), 10, 0) * Math.sign(x);
  if (Math.abs(result) > Math.pow(2,31)-1) return 0;
  
  return result;
};

function parseInt(x, tens, result) {
  if (x % tens === x) {   // If    
    return result * 10 + Math.floor(x % tens / (tens/10));
  } else {
    result = result === 0 ? x % tens : result * 10 + Math.floor(x % tens / (tens/10));
    return parseInt(x, tens*10, result);
  }
}

console.log(reverse(231));