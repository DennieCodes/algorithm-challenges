/*
Write a function called "removeStringValuesLongerThan".

Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

*/

function removeStringValuesLongerThan(num, obj) {
	for (let item in obj) {
		// if (typeof obj[item] === 'string' && obj[item].length > num) {
		if (typeof obj[item] === 'string' && obj[item].length > num) {
			delete obj[item];
		}
	}

	console.log('NEW: ', obj);
	return obj;
}

obj = {
	name: 'Montana',
	age: 20,
	location: 'Texas',
};

result = removeStringValuesLongerThan(6, obj);
console.log(result); // { age: 20, location: 'Texas' }
