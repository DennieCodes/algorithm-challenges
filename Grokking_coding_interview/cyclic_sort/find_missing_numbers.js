const findMissingNumbers = (nums) => {
	let i = 0;

	while (i < nums.length) {
		const j = nums[i] - 1;

		if (nums[i] !== nums[j]) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
		} else {
			i += 1;
		}
	}

	missingNumbers = [];

	for (i = 0; i < nums.length; i++) {
		if (nums[i] !== i + 1) {
			missingNumbers.push(i + 1);
		}
	}

	return missingNumbers;
};

console.log(findMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(findMissingNumbers([2, 4, 1, 2]));
console.log(findMissingNumbers([2, 3, 2, 1]));
