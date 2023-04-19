/* Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example
scores = [12, 24, 10, 24]

Scores are in the same order as the games played. She tabulates her results as follows:

                            Count
Game    Score   Min Max     Min Max
0       12      12  12      0   0
1       24      12  24      0   1
2       10      10  24      1   1
3       24      10  24      1   1

Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

Function Description

Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):

int scores[n]: points scored per game

Returns

int[2]: An array with the numbers of times she broke her records. Index  is for breaking most points records, and index 1 is for breaking least points records.

Input Format

The first line contains an integer n, the number of games.
The second line contains n space-separated integers describing the respective values of
score0, score1, ..., score n-1

Constraints
1 <= n <= 1000
0 <= scores[i] <= 10^8

Sample input 0
9
10 5 20 20 4 5 2 25 1

Sample output 0
2 4

ELI5: 
In this problem, I am given an array of numbers and I want to count the number of times that in this array we achieve a highest number and also a lowest number.  The first number sets the base value.

input: array of integers
output: array of 2 integers that count the number of times a highest number is achieved and the number of times a lowest number is achieved

pseudocode:
1. Record first value as both highest and lowest value
2. Iterate through the array
3. If the next value is higher than highest value then increment highest count
    or if the next value is lower than the lowest value then increment lowest count
4. Return an array of the highest value count and the lowest value count


*/

const breakingRecords = (scores) => {
	// 1. Record first value as both highest and lowest value
	let highVal = scores[0];
	let lowVal = scores[0];
	let highCount = 0;
	let lowCount = 0;

	scores.forEach((ele) => {
		if (ele > highVal) {
			highCount++;
			highVal = ele;
		} else if (ele < lowVal) {
			lowCount++;
			lowVal = ele;
		}
	});

	return [highCount, lowCount];
};

console.log(breakingRecords([12, 24, 10, 24]));

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

/* 

pseudocode:
1. Iterate through the array and add the ints as keys into an object
2. Each time the value occurs increment value
3. Using Object.keys(keys) create an array of the keys object
4. Derive the highest value and lowest value from the array
5. Use those two keys to reference value in keys
6. Return value of largest key and value of smallest key

const breakingRecords = (scores) => {
  const keys = {};
  scores.forEach((ele) => keys[ele] = keys[ele] ? keys[ele] += 1 : 1);

  const ref = Object.keys(keys).sort();

  return [ keys[ref[0]], keys[ref[Object.keys(keys).length-1]] ];
}

console.log(breakingRecords([12, 24, 10, 24]));

console.log(breakingRecords([ 10, 5, 20, 20, 4, 5, 2, 25, 1]));

*/
