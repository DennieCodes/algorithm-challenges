/* 
Given an array of bird sightings where every element represents a bird type id, determine the id of the most 
frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their 
ids.

Example
arr = [1,1,2,2,3]

There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

Function Description
Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):
* int arr[n]: the types of birds sighted

Returns
int: the lowest type id of the most frequently sighted birds

input: an array of integers
output: the value of the lowest value that occurs most frequently in the array

1. Iterate over the array
2. Log values into key/value pairs.  Increment whenever value repeats
3. Find key with most values and return
4. If there are more than one key with the max value, return the lowest key value

*/

function migratoryBirds(arr) {
	const birds = {};

	arr.forEach((ele) => {
		birds[ele] === undefined ? (birds[ele] = 1) : birds[ele]++;
	});

	return Object.entries(birds).sort(([, a], [, b]) => b - a)[0][0];
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
