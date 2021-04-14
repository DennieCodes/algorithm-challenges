// Challenge: Given two strings, write a function to determine if the second string is an anagram of the first.

/* Breakdown: Compare letter by letter the two strings to see if they are an anagram.  Use a frequency counter
   which uses either an object or set to set key/value pairs to record letters of each given string.

   1. Go letter by letter through one string and check the other string for it's presence.
   2. If it exists then splice it out from the second string and continue searching.
   3. If it doesn't exist then return false.


*/

// Simple (naive) version
// Type ON Notation: O(n2)
const validAnagram_naive = (strOne, strTwo) => {
  // Check length of both strings first
  if (strOne.length !== strTwo.length) return false;

  let strOneComp = strOne.split("");
  let strTwoComp = strTwo.split("");

  for (const letter of strOneComp) {
    // indexOf is an iteration which makes validAnagram O(n2) since it's a nested loop
    let searchComp = strTwoComp.indexOf(letter);
    if (searchComp === -1) {
      return false;
    }

    strTwoComp.splice(searchComp, 1);
  }

  return true;
};

// Refactored version
// TYPE O Notation: ON
const validAnagram = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let item of strOne) {
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
  }

  for (let item of strTwo) {
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
  }

  // Iterate over either frequencyCounter object and check for corresponding key/value in other
  for (let item in frequencyCounter1) {
    // Check that frequencyCounter2 has matching key to item
    if (!frequencyCounter2.hasOwnProperty(item)) return false;

    // Check for the same frequency of items
    if (frequencyCounter1[item] !== frequencyCounter2[item]) return false;
  }

  return true;
};

console.log(
  validAnagram("aaz", "aaz"),
  validAnagram("aaz", "aza"),
  validAnagram("rat", "car"),
  validAnagram("anagram", "nagaram"),
  validAnagram("qwerty", "qeywrt"),
  validAnagram("abdfa", "idgaf")
);
