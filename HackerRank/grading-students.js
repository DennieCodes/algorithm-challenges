// Every student receives a grade from 0 to 100
// Any grade < 40 is failing

// If the grade and next multiple of 5 is less than 3, round grade up to the next multiple of 5
// If the value is less than 38, no rounding occurs as the result will still be a failing grade

// input: an array of ints.  The first value is the # of students, the remainder are their grades
// output: an array of ints with rounded values as appropriate
// constraints:
//  number of students: 1 <= n <= 60
//  grades: 0 <= grades <= 100

// sample input:  [ 4, 73, 67, 38, 33 ]
// sample output:  [ 75, 67, 40, 33 ]

// pseudocode
// 1. Iterate through the array
// 1a. If the value is < 38 no rounding occurs as it's a failing value
// 2. Evaluate each value, recording how many multiple's of 5 it contains
// 3. Compare each value to the next multiple of 5 value
// 4. If the difference is less than 3 than record next rounded value
// 5. If the difference is more than 3 then record that value
// 6. Return the rounded array

const gradingStudents = (arr) => {
	let returnArr = [];

	// 1. Iterate through the array
	for (let i = 1; i < arr.length; i++) {
		// 1a. If the value is < 38 no rounding occurs as it's a failing value
		const roundUpVal = (Math.floor(arr[i] / 5) + 1) * 5;

		if (arr[i] < 38) {
			returnArr.push(arr[i]);
			continue;
		}

		if (roundUpVal - arr[i] < 3) {
			returnArr.push(roundUpVal);
		} else {
			returnArr.push(arr[i]);
		}
	}

	return returnArr;
};

console.log(gradingStudents([4, 73, 67, 38, 33]));
