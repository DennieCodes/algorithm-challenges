/* Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

1. The length of the segment matches Ron's birth month, and,
2. The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.

Example
s = [2, 2, 1, 3, 2]
d = 4
m = 2

Lily wants to find segments summing to Ron's birth day, d = 4  with a length equalling his birth month, m = 2. In this case, there are two segments meeting her criteria: [2, 2] and [1, 3].

Function Description

Complete the birthday function in the editor below.

birthday has the following parameter(s):

int s[n]: the numbers on each of the squares of chocolate
int d: Ron's birth day
int m: Ron's birth month
Returns

int: the number of ways the bar can be divided

* Paraphrase problem: 
We're given an array of integers and two other integer values day and month.

We want to find segments of the array that satisfy two conditions:
  1. values of the int in the sub-array equal to d
  2. Length of the sub-array is equal to m

* input: array of ints, two int values
* output: an int value of sub-arrays that satisfy the specified criteria

* pseudocode
  1. We are going to iterate across the given array.  Inititate count var to 0.
  2. Starting at the beginning track a sub-array of m length
  3. Check if value of sub-array equals to d
  4. If not then continue iteration by moving sub-array forward at start and end
  5. If so then increment count and also continue iteration
  6. Return count total

*/

const birthday = (s, d, m) => {
	let count = 0;
	let start = 0;
	let end = 0;
	let subarray = 0;

	// console.log(birthday([4], 4, 1));
	// i = 1
	// subarray = 4
	// count = 0
	// start = 0
	// end = 1
	for (let i = 0; i <= s.length; i++) {
		// compare length of start and end values of subarray
		if (end - start < m) {
			// Add the current int values and increment end
			subarray += s[i];
			end++;
		} else {
			// if subarray is proper length then compare sum
			if (subarray === d) {
				// if subarray is proper value then increment count
				count++;
			}
			subarray -= s[start];
			subarray += s[end];
			// increment both values
			start++;
			end++;
		}
	}

	return count;
};

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
console.log(birthday([4], 4, 1));
