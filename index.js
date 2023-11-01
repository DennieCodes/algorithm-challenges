/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

input: two strings for evaluation
output: true if both strings are anagrams or false it they aren't



*/

var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	const hashS = {},
		hashT = {};

	// Load both strings into hash tables
	for (let i = 0; i < s.length; i++) {
		hashS[s[i]] = hashS[s[i]] === undefined ? 1 : (hashS[s[i]] += 1);
		hashT[t[i]] = hashT[t[i]] === undefined ? 1 : (hashT[t[i]] += 1);
	}

	for (let key in hashS) {
		if (hashT.hasOwnProperty(key)) {
			if (hashS[key] != hashT[key]) {
				return false;
			}
		} else return false;
	}

	return true;
};

const data = [
	['anagram', 'nagaram'],
	['rat', 'car'],
];
const result = isAnagram('rat', 'car');

console.log(result);

// const obj = { a: 10, b: 20 };

// for (let i in obj) {
// 	console.log(i, obj[i]);
// }
