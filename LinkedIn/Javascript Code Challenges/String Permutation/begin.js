/* 
  Input: String of indeterminant length
  Output: Total # of possible combinations that can be made with that string
  Rules: Use a recursive function to calculate the output

  1. The function should take in a string and take its string length and multiply it by
  2. the result of another call to that same function with one less letter in that string
  3. this function should continue until the length of the string is 1
  4. this function will then return the result to each recursive call
*/

const stringPermutations = (string) => {
	if (string.length === 1) return 1;

	return string.length * stringPermutations(string.substring(1));
};

console.log(stringPermutations('hello'));
