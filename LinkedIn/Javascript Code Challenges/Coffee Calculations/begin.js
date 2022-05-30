const coffeeTally = (total) => {
	const tally = total.reduce((prev, cur) => {
		return prev + cur * 1.25;
	}, 0);

	return `The total bill is, $${tally}`;
};

console.log(coffeeTally([1, 2, 3]));
