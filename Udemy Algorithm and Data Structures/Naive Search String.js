/* Naive Search String
   You are given two strings and want to search the larger string for the number of times that the shorter
   string appears in it.  Return the number of times the shorter string is found.


   Breakdown:
   Increment from beginning to the end of the first string
   Check each time if the current letter matches the first letter of the shorter string.
   If it matches then begin a second loop and check if the shorter string exists at that
   position of the longer string.
   If something doesn't match then exit from the second loop
   If it does match then increment count and continue the larger loop
   Return the number of times that there are matches
*/

const naiveSearch = (str, pattern) => {
  let count = 0;
  // Iterate through the entire string character by character
  for (let i = 0; i < str.length; i++) {
    // Test if the current letter matches the first letter of the test pattern
    if (str[i] === pattern[0]) {
      // Increment the length of the test pattern
      for (let j = 0; j < pattern.length; j++) {
        // If there is a mismatch then break
        if (str[i + j] !== pattern[j]) break;

        // If the loop reaches the end without a break then there's a match
        if (j + 1 === pattern.length) count++;
      }
    }
  }

  return count;
};

console.log(naiveSearch("haha here is harold", "ha"));
