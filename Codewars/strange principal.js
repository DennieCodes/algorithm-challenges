// A high school has a strange principal. On the first day, he has his students perform an odd opening day
// ceremony:

// There are number of lockers "n" and number of students "n" in the school. The principal asks the first
// student to go to every locker and open it. Then he has the second student go to every second locker and
// close it. The third goes to every third locker and, if it is closed, he opens it, and if it is open, he
// closes it. The fourth student does this to every fourth locker, and so on. After the process is completed
// with the "n"th student, how many lockers are open?

// The task is to write a function which gets any number as an input and returns the number of open lockers
// after last sudent complets his activity. So input of the function is just one number which shows number of
// lockers and number of students. For example if there are 1000 lockers and 1000 students in school then input
// is 1000 and function returns number of open lockers after 1000th student completes his action.

// The given input is always an integer greater than or equal to zero that is why there is no need for validation.

// input: n number of students and lockers
// output: total number of open lockers at the end

// create an array of size n, fill it with booleans marked as true, or false which first will flip all
// iterate student by student and they will open lockers where their index % current locker === 0

// FUNCTIONS
const strangePrincipal = (num) => {
	let arr = new Array(num);
	arr.fill(false, 0);

	for (let i = 1; i < num; i++) {
		for (let j = 1; j < num; j++) {
			if (j % i === 0) {
				arr[j - 1] = !arr[j - 1];
			}
		}
	}

	return arr.filter((ele) => ele === true).length;
};

// Students will only flip the state of those lockers that their number is a divisor of (student 2 flips the
// even lockers, student 3 flips the lockers divisible by 3, so on and so forth...). So, the only lockers that
// will remain open after N rounds are those that have an odd number of divisors (because they start closed,
// an odd number of flips will leave it open). The only numbers that have an odd number of divisors are perfect
// squares, so all of the perfect-square-numbered lockers will be left open. So after N rounds, the number of
// lockers left open will be the square root (floored) of N.
const strangePrincipalLean = (num) => {
	return Math.floor(Math.sqrt(num));
};

// ASSERTIONS
const assertToBeEquals = (actual, expected, testName) => {
	if (actual === expected) {
		console.log('passed');
	} else {
		console.log(`FAILED [${testName}] Expected ${actual}, to be ${expected}`);
	}
};

// TEST CASE

// T F F

const testName = 'It should return correct number of combinations';
// const actual = strangePrincipal(3);
const actual = strangePrincipalLean(3);
const expected = 1;

assertToBeEquals(actual, expected, testName);
