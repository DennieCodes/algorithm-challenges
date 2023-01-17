const findMissingNumbers = (nums) => {
	let i = 0;
	const n = nums.length;

	while (i < n) {
		j = nums[i];
		if (nums[i] < n && nums[i] !== nums[j]) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
		} else {
			i += 1;
		}
	}

	for (i = 0; i < n; i++) {
		if (nums[i] !== i) {
			return i;
		}
	}

	return n;
};

console.log(findMissingNumbers([4, 0, 3, 1]));
console.log(findMissingNumbers([8, 3, 5, 2, 4, 6, 0, 1]));
