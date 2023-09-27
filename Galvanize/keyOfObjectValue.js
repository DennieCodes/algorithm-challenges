/*

We're going to debug a function that takes in an object and a target value. This function will iterate over the object's values and attempt to locate the target value. If the value is found, the function should return the name of the key where the value in question is located, and if not, the function should return -1. Below is an example of the code running, assuming that you'll have debugged the described function: keyOfObjectValue:

let result1 = keyOfObjectValue({cucumbers: 14, carrots: 20, peas: 400}, 20);
console.log('should log "carrots":', result1);

let result2 = keyOfObjectValue({name: 'Bruce Wayne', hero: 'Batman', city: 'Gotham'}, 'Superman');
console.log('should log -1:', result2);

*/

function keyOfObjectValue(object, target) {
	for (let key in object) {
		if (object[key] === target) {
			return key;
		}
	}
	return -1;
}

let result1 = keyOfObjectValue({ cucumbers: 14, carrots: 20, peas: 400 }, 20);
console.log('should log "carrots":', result1);
