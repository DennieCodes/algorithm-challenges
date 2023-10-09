/*

Given a string s, find the length of the longest
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

input: string
output: integer, that represents the length of the longest substring

pseudocode:
1. create a temp obj, and integer to store largest value
2. iterate over the string
3. add each char from the string to the obj
4. if the char is unique then increment the integer and continue loop
5. if the char is already present then empty the obj and set integer to 0
6. continue iteration until the end of the string
*/

var lengthOfLongestSubstring = function (s) {
	let temp = {};
	let longest = 0;
	let count = 0;
	let start = 0;

	for (let i = 0; i < s.length; i++) {
		let char = s[i];
		if (temp[char] === undefined) {
			temp[char] = 1;
			count++;
		} else {
			temp = {};
			longest = count > longest ? count : longest;
			count = 0;
		}
	}

	return longest;
};

let testSet = ['abcabcbb', 'bbbbb', 'pwwkew'];
result = lengthOfLongestSubstring(testSet[2]);

console.log(result);
