/* zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
Input validation: Assume all input is valid.

input
1. A function which takes 2 arguments
2. 2 Arrays

output
1. An array of results from calling the function passing in values from the two provided arrays

exceptions
1. Only call up to the length for whichever array is shorter

pseudocode
1. create an empty array
2. while iterate as long as both arrays at same index aren't undefined
3. call function provided with values from arrays
4. push the results onto our created array

*/

// FUNCTIONS
function zipWith(fn, a0, a1) {
	let result = [];
	let i = 0;

	while (a0[i] !== undefined && a1[i] !== undefined) {
		result.push(fn(a0[i], a1[i]));
		i++;
	}

	return result;
}

// ASSERTTIONS
const assertArrayToBeEquals = (actual, expected, testName) => {
	if (JSON.stringify(actual) === JSON.stringify(expected)) {
		console.log('passed');
	} else {
		console.log(`FAILED [${testName}] Expected ${actual}, to be ${expected}`);
	}
};

// TEST CASE
const testName = 'Expect array to be equals';

// const actual = zipWith(Math.pow, [10,10,10,10], [0,1,2,3]);
// const expected = [1,10,100,1000];
// assertArrayToBeEquals(actual, expected, testName);

const actual = zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]);
const expected = [4, 7, 7, 4, 7, 7];
assertArrayToBeEquals(actual, expected, testName);

// zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
// zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

// zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
// zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
