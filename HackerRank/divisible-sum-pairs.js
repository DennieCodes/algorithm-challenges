/* Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .

Example

ar = [ 1,2,3,4,5,6 ]
k = 5

Three pairs meet the criteria: [1,4], [2,3] and [4,6].

Function Description

Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

int n: the length of array ar
int ar[n]: an array of integers
int k: the integer divisor
Returns
- int: the number of pairs

input: n = length of array, k = the integer divisor, ar = array of integers
output: the number of pairs in the array where the first number is smaller than the second and sum of these pairs
        is divisible by k
assumptions: There are at least 2 array entries.  The divisor is 1 or larger.  The value of the integers are between
             1 and 100

1. sort the array
2. iterate over the array one by one
3. on each item, iterate over the rest of the array
4. try adding each consecutive item and check if divisible by k
5. if divisible then increment some counter
6. return counter value

*/

function divisibleSumPairs(n, k, ar) {
	let count = 0;
	const sorted = ar.sort();

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if ((sorted[i] + sorted[j]) % k === 0) {
				count++;
			}
		}
	}

	return count;
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
// divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]);
