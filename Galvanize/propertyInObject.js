/*

Please complete the following function that takes an array of objects and a key. The function should return an array of the same length as the input. For each position in the returned an array, it should have a true value if the corresponding object value in the input array has the indicated key. Otherwise, the position in the array should have false.

Array of object	Key	Output
[{"age": 10}, {"age": 12}]	"age"	[true, true]
[{"age": 10}, {"remote": False}]	"age"	[true, false]
[]	"age"	[]

*/

function propertyInObject(values, propertyName) {
	let result = [];

	for (let dict of values) {
		if (dict.hasOwnProperty(propertyName)) {
			result.push(true);
		} else {
			result.push(false);
		}
	}
	return result;
}
