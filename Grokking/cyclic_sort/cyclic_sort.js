const cyclic_sort = (arr) => {
	let i = 0;

	while (i < arr.length) {
		const j = arr[i] - 1;

		if (arr[i] !== arr[j]) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
		} else {
			i += 1;
		}
	}

	return arr;
};

console.log(cyclic_sort([3, 1, 5, 4, 2]));
