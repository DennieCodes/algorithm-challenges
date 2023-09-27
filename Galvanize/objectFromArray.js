/*

Please consider the following Python function, which takes a list of values and creates a dictionary from them:

def dictionary_from_list(list):
    d = {}
    for idx in range(0, len(list)-1, 2):
        key = list[idx]
        value = list[idx+1]
        d[key] = value
    return d
For example, given the input ["a", 1, "b", 2], it would create the dictionary {'a': 1, 'b': 2}.

Write an equivalent JavaScript function named objectFromArray that takes an array of values and creates an object whose properties and values come from the array. For example, given the input ['a', 1, 'b', 2], it would return an object of the form {a: 1, b: 2}.

*/

function objectFromArray(array) {
	let dict = {};

	for (let i = 0; i < array.length; i += 2) {
		if (i + 1 < array.length) {
			dict[array[i]] = array[i + 1];
		}
	}

	return dict;
}

result = objectFromArray(['a', 1, 'b', 2, 'c']);

console.log(result);
