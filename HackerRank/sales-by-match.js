/* There is a large pile of socks that must be paired by color. Given an array of integers representing the color 
of each sock, determine how many pairs of socks with matching colors there are.

Example
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]

There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. 
The number of pairs is 2.

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

* int n: the number of socks in the pile
* int ar[n]: the colors of each sock

Returns
* int: the number of pairs

Pseudocode
1. Tally up the number of each color sock (individual values in the arr)
2. For each color set of sock determine how many pairs there are and save to a total value
3. Return total value

*/

function sockMerchant(n, ar) {
	let count = 0;
	let pairs = {};
	ar.forEach((ele) => {
		pairs[ele] === undefined ? (pairs[ele] = 1) : pairs[ele]++;
	});

	Object.entries(pairs).forEach((arr) => {
		count += Math.floor(arr[1] / 2);
	});

	return count;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
