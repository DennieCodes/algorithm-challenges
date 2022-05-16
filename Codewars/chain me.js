function chain(start, fn) {
	return fn.reduce((prevVal, curValue) => curValue(prevVal), start);
}

const arrFunc = [(val) => val + 2, (val) => val * 3];

console.log(chain(10, arrFunc));
