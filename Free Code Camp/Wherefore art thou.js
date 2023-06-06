/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that 
have matching name and value pairs (second argument). Each name and value pair of the source object has to be 
present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument), because it contains the name and its 
value, that was passed on as the second argument.

input: array of objects, object to compare first array
output: an array of all objects from first array that matches compare object

paraphrase: look over an array of objects for the presence of the comparison object.  Return all objects that match
the comparison object

** note: comparison object may have more than one key/value pair

pseudocode: 
1. Iterate over array of objects
2. Check to see if comparison object is present
3. Return array of objects that matched the comparison object

*/

function whatIsInAName(collection, source) {
	const compObj = Object.entries(source);

	return collection.filter((ele) => {
		if (
			compObj.every((item) => {
				const [key, value] = item;
				return ele.hasOwnProperty(key) && ele[key] === value;
			})
		)
			return ele;
	});
}

// Simple case
const result = whatIsInAName(
	[
		{ first: 'Romeo', last: 'Montague' },
		{ first: 'Mercutio', last: null },
		{ first: 'Tybalt', last: 'Capulet' },
	],
	{ last: 'Capulet' },
);

// More complex case
// const result = whatIsInAName(
// 	[{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
// 	{ apple: 1, cookie: 2 },
// );

console.log(result);
