/* Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

// In the diagram below:

//     a ------>.  <-------------->         b
//   apple.        s              t      orange

// The red region denotes the house, where s is the start point, and t is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
// Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. *

Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s, t])?

For example, Sam's house is between s=7 and t=10. The apple tree is located at a=4 and the orange at b=12. There are m=3 apples and n=3 oranges. Apples are thrown [2,3, -4] units distance from a, and oranges = [-3,-2,4] units distance. 
Adding each apple distance to the position of the tree, they land at [4 + 2, 4 + 3, 4 + -4] = [6, 7, 0]. 
Oranges land at [12 + 3,12 + -2,12 + -4] = [15, 10, 8]. One apple and two oranges land in the inclusive range  so we print

// input
//  *. 1. INTEGER s
//  *  2. INTEGER t
//  *  3. INTEGER a
//  *  4. INTEGER b
//  *  5. INTEGER_ARRAY apples
//  *  6. INTEGER_ARRAY oranges
*/

// Pseudocode
// 1. Iterate over apples array adding position of a
// 2. Iterate over oranges array adding position of b
// 3. If any values from first iteration are within house range then count it
// 4. If any values from second interation are withing house range then count it
// 5. Return counts on separate lines

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
	// s, t are the range of the house
	// a is the position of the apple tree
	// b is the position of the orange tree
	// apples is the array of ints where apples fell
	// oranges is the array of ints where oranges fell

	const appleCount = apples
		.map((ele) => ele + a)
		.filter((ele) => ele >= s && ele <= t).length;
	const orangeCount = oranges
		.map((ele) => ele + b)
		.filter((ele) => ele >= s && ele <= t).length;

	return appleCount + '\n' + orangeCount;
};

const assertToBeEqual = (actual, expected, testName) => {
	if (actual === expected) {
		console.log('[PASSED]');
	} else {
		console.log(
			`[FAILED] ${testName}. Expected ${actual}, to be equals to ${expected}`
		);
	}
};

const testName =
	'It should result correct values of apples and oranges within range';
const actual = countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
const expected = '1\n2';

assertToBeEqual(actual, expected, testName);
