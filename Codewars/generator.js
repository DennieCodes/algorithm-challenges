// Multiplication - Generators #2

// Generators can be used to wonderful things. You can use them for numerous things, but here is one specific
// example. You are studying for a test so you must practice your multiplication, but you don't have a
// multiplication table showing the different examples. You have decided to create a generator that prints out a
// limitless list of time tables.

// Task
// Your generator must take one parameter `a` then everytime the generator is called you must return a string
// in the format of: `'a x b = c'` where c is the answer. Also, the value of `b`, which starts at 1, must
// increment by 1 each time!

// input: 'a', num parameter
// output: return a string 'a x b x c' on each call to the generator with b incrementing by 1, c as the result
// edge cases: a === 0?

// assumptions: value of a and b must be persistent for subsequent calls so use of object, set ab in constructor
// each call will return the same

// FUNCTIONS
const generator = (a) => {
	this.a = a;
	this.b = 0;

	const result = this.a * this.b;

	return () => {
		return `${this.a} * ${this.b} = ${result}`;
	};
};

// TEST CASE
const result = generator(1);

console.log(result());
console.log(result.next());
