/* In this kata you have to create all permutations of an input string and remove duplicates, if present.
   This means, you have to shuffle all letters from the input in all possible orders.
   The order of the permutations doesn't matter
*/

// Breakdown - You are given a string of indeterminate length.  You have to return an array of every single variation composed
// of the characters in the string.
//
// input: string
// output: An array of strings of every combination of characters from that string
// edge cases: not string, empty input, single character
//
// Pseudocode steps:
// =================
// 1. Check edge cases of input.  End if invalid. Return string if under 2 length - since there is no combination with a single character
//    this will return the string.
// 2. Create an array to store each permutation
// 3. Loop over the string character by character
// 4. Save the current character and the remaining characters
// 5.
// 6. Begin passing the remaining characters into iterative recursive calls
// 7. Push the results of those recursive calls onto the array
// 8. Return the array

const permutations = (str) => {
  // If not string return undefined
  if (typeof str !== "string" || !str) return undefined;

  // If str length is less than 2 then return string
  if (str.length < 2) return str;

  // Array to store each permutation execution
  const permutationsArray = [];

  // Iterate over each character in the given string
  for (let i = 0; i < str.length; i++) {
    // Store current character
    let currentChar = str[i];

    if (str.indexOf(currentChar) != i) continue;

    let remainingChar = str.slice(0, i) + str.slice(i + 1);

    for (let instance of permutations(remainingChar)) {
      permutationsArray.push(currentChar + instance);
    }
  }

  return permutationsArray;
};

console.log(permutations("AABC"));

// console.log(
//   // permutations("a"), // ['a']
//   // permutations("ab"), // ['ab', 'ba']
//   // permutations("abc") // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// );

/* abcd - length: 4, unique char: 4, unique combos: 12
// Maybe length of string * unique char - 1;
// Each character will occupy a position in string 3 times

abcd, acdb, adbc = [0][1][2][3], [0][2][3][1],[0][3][2][1]
                   [0][2][3][1]
bcda, bdac, bacd
cdab, cabd, cbda
dabc, dbca, dcab



*/
