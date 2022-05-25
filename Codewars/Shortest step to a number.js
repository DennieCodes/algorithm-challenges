/* Shortest step to a number
Summary: Given a number, num, return the shortest amount of steps it would take from 1, to land exactly on that number.

Description:
A step is defined as either:

Adding 1 to the number: num += 1
Doubling the number: num *= 2
You will always start from the number 1 and you will have to return the shortest count of steps it would take to land exactly on that number.

1 <= num <= 10000

Examples:

num == 3 would return 2 steps:

1 -- +1 --> 2:        1 step
2 -- +1 --> 3:        2 steps

2 steps
num == 12 would return 4 steps:

1 -- +1 --> 2:        1 step
2 -- +1 --> 3:        2 steps
3 -- x2 --> 6:        3 steps
6 -- x2 --> 12:       4 steps

4 steps
num == 16 would return 4 steps:

1 -- +1 --> 2:        1 step
2 -- x2 --> 4:        2 steps
4 -- x2 --> 8:        3 steps
8 -- x2 --> 16:       4 steps

4 steps

Analysis
--------
Input: An integer which the challenge will be based upon
Output: The number of steps starting from one to reach that number
Rules: The first step is always +1. A step is either +1 or *2 of current working number.

This problem favors a binary tree likely using recursion

Pseudocode
----------
1. Create a count for number of steps, also some working value for comparison
2. Recursive function which creates two values, one value is +1, one value is *2, each call increments count
3. These values will be compared to input target value if equal then return count
4. If not equal then each value will call the recursive function

*/

const shortestStepsToNum = (num) => {
	let index = 0,
		count = 1;
	comparison = [2];

	// const recursiveFn = (num) => [num + 1, num * 2];

	while (!comparison.includes(num)) {
		// recursiveFn(comparison[index]).forEach((item) => comparison.push(item));
		comparison.push(comparison[index] + 1);
		comparison.push(comparison[index] * 2);
		index++;
	}

	console.log(comparison);
	return index + 1;
};

// console.log(
// 	shortestStepsToNum(3),
// 	shortestStepsToNum(12),
// 	shortestStepsToNum(16),
// 	shortestStepsToNum(71)
// );

console.log(shortestStepsToNum(12));

/* Alternative Solution

function shortestStepsToNum(num) {
  if(num <= 1) return 0;
  if(num%2 == 1) return 1 + shortestStepsToNum(num -1);
  return 1 + shortestStepsToNum(num/2);
}

*/
