/* 
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps steps, for every 
step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each 
step up or down represents a 1 unit change in altitude. We define the following terms:

* A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending 
with a step down to sea level.
* A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending 
with a step up to sea level.

Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Example
steps = 8 path = [DDUUUUDD]

The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, the 
hiker returns to sea level and ends the hike.

Function Description

Complete the countingValleys function in the editor below.

inputs:
  int steps: the number of steps on the hike
  string path: a string describing the path
outputs:
  int: the number of valleys traversed
notes:
  * hikes always start and end at sea level
  * mountains are sequences of steps above sea level
  * A valley is a sequence of steps below sea level
pseudocode:
  1. record level beginning at 0
  2. iterate over the string and if U increment level, and if D decrement level
  3. when level goes below 0, then we're entering a valley
  4. we are still in that valley until level returns to 0
  5. there can be more than one valley

*/

function countingValleys(steps, path) {
	let flag = false;
	let valleys = 0;
	let level = 0;
	let walk = path.split('');

	path.split('').forEach((ele) => {
		ele === 'U' ? level++ : level--;

		// if below sea level
		if (level < 0) {
			if (flag === false) {
				valleys++;
				flag = true;
			}
		} else if (level === 0 && flag === true) {
			// how do we capture when we leave a valley
			flag = false;
		}
	});

	// for (let i = 0; i < steps - 1; i++) {
	// 	walk[i] === 'U' ? level++ : level--;

	// }

	return valleys;
}

console.log(countingValleys(8, 'DDUUUUDD'));
