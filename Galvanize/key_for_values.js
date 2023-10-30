/*

Please complete the following function that accepts two parameters: a JSON-formatted string representing an object, and a value. The function should return the key for a matching value if it exists in the object represented by the JSON, and None otherwise.

JSON-formatted string	Property value	Output
{}	"Noor"	null
'{"age": 23}'	"Noor"	null
'{"name": "Noor"}'	'Noor"	"name"
Note: In the object, there will only be zero or one entry with the specified property value.

*/

function keyForValue(jsonString, propertyValue) {
	const parsed = JSON.parse(jsonString);

	for (let item in parsed) {
		if (parsed[item] === propertyValue) {
			return item;
		}
	}

	return null;
}
