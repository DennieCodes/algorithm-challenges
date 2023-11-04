const forEach = (arr, fn) => {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		// if (typeof arr[i] === "number") {
		newArr.push(fn(arr[i]));
		// }
		//   newArr.push("");
	}

	return newArr;
};

const data = [1, 2, 3, 4, 5];
const timesTwo = (num) => {
	return (num *= 2);
};

// console.log(forEach(['A', 1, 3], timesTwo));

const map = (arr, fn) => {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		newArr.push(fn(arr[i]));
	}
	return newArr;
};

// console.log(map(data, timesTwo));

const filter = (arr, fn) => {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i])) {
			newArr.push(arr[i]);
		}
	}

	return newArr;
};

const isEven = (num) => {
	if (num % 2 === 0) {
		return true;
	}
	return false;
};

// console.log(filter(data, isEven));

const reduce = (arr, fn, def) => {
	let acc = def;
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		acc = fn(acc, arr[i], i);
	}

	return acc;
};

const sum = (acc, num, idx) => {
	return (acc += num);
};

console.log(reduce(data, sum, 0));
