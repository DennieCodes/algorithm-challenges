// Challenge
// Your code should accept an array of numbers that represent a phone number. E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]. You code should return a string in this format: '(650) 835-9172'.

// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
	this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function () {
	var string = this.parenthesize(this.getAreaCode()) + ' ';
	// string = string + this.getExchangeCode() + '-' this.getLineNumber();
	string = string + this.getExchangeCode() + '-' + this.getLineNumber();
	return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function () {
	// your code here
	return this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function () {
	// your code here
	return this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function () {
	// your code here
	return this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function (string) {
	return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function (start, end) {
	return this.numbers.slice(start, end).join('');
};

// ASSERTION FUNCTION(S) TO BE USED
function assertPhoneNumberToBeEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log('passed');
		return;
	}

	console.log(`FAILED [${testName}] expected ${actual}, to be ${expected}`);
}

// TESTS CASES
const actual = new PhoneNumberFormatter([
	6, 5, 0, 8, 3, 5, 9, 1, 7, 2,
]).render();
const expected = '(650) 835-9172';

assertPhoneNumberToBeEqual(
	actual,
	expected,
	'Convert array of numbers to phone number'
);
