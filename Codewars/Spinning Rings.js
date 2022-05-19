/* Imagine two rings with numbers on them. The inner ring spins clockwise (decreasing by 1 each spin) and the outer ring spins counter 
clockwise (increasing by 1 each spin). We start with both rings aligned on 0 at the top, and on each move we spin each ring one increment. 

How many moves will it take before both rings show the same number at the top again?

The inner ring has integers from 0 to innerMax and the outer ring has integers from 0 to outerMax, where innerMax and outerMax are 
integers >= 1.

e.g. if innerMax is 2 and outerMax is 3 then after
1 move: inner = 2, outer = 1
2 moves: inner = 1, outer = 2
3 moves: inner = 0, outer = 3
4 moves: inner = 2, outer = 0
5 moves: inner = 1, outer = 1
Therefore it takes 5 moves for the two rings to reach the same number
Therefore spinningRings(2, 3) = 5
e.g. if innerMax is 3 and outerMax is 2 then after
1 move: inner = 3, outer = 1
2 moves: inner = 2, outer = 2
Therefore it takes 2 moves for the two rings to reach the same number
spinningRings(3, 2) = 2

Analysis
--------
Input: Two integers representng max value of inner and outer rings
Output: Integer representing the number of moves to match numbers of both integers at top position
Edge, Rules and Constraints: Both numbers are >= 1.  Both numbers start at 0

We are given two numbers that represent rings.  
The inner ring decrements until its given number then returns to 0 and continues
The outer ring increments until its given number then returns to 0 and continues

Pseudocode
----------
1. Start both numbers at 0, also a count variable at 0
2. We will iterate until both numbers are equal
3. We decrement the first number and increment the second
4. When we hit the max value provided by each number we reset it to 0



*/

const spinningRings = (innerMax, outerMax) => {
	let count = 0,
		innerRing = 0,
		outerRing = 0;

	do {
		innerRing === 0 ? (innerRing = innerMax) : innerRing--;
		outerRing === outerMax ? (outerRing = 0) : outerRing++;

		count++;
	} while (innerRing !== outerRing);

	return count;
};

console.log(`${spinningRings(2, 3)},
${spinningRings(3, 2)},
${spinningRings(1, 1)},
${spinningRings(2, 2)},
${spinningRings(3, 3)}
`);

/*
Clever solutions:

function spinningRings(innerMax, outerMax) {
  let [i, im, om] = [0, 0, 0]
  while (++i) {
    if (--im < 0) im = innerMax;
    if (++om > outerMax) om = 0;
    if (im == om) return i;
  }
};

*/
