/* String Incrementer challenge from Codewars: https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

Instructions
------------
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

/* Break-down
   --------------------
   The input will be a string that may or may not have a number at the end.  If it doesn't then add 1 and return the new string
   If the string does have a number then increment it.  If the number has 0's then make sure to include that in the numbers.

   1. Test if the string ends with a number if not add 1, then return
   2. Separate the characters from the numerical portions of the string
   3. Check if string leads with a 0, if so record the string length so 0's can be appended
   4. Increment the numerical value, if 0's have to be replaced then add on length difference
   5. Append new numerical string onto character string and return
*/

const incrementString = (string) => {
  const numericalRegEx = /\d/g; // RegEx to test or match numerical value
  const charRegEx = /\D/g; // RegEx to match character portions of string
  const startingZeroRegEx = /^0+/; // RegEx to test 0 at start of a string

  let result = "";

  if (numericalRegEx.test(string)) {
    result = string.match(charRegEx).join("");
    let numerical = string.match(numericalRegEx).join("");
    let startingZeros = numerical.match(startingZeroRegEx);

    if (startingZeros !== null) startingZeros = startingZeros.join("");

    if (!startingZeros) {
      result += String(parseInt(numerical) + 1);
    } else {
      if (
        String(parseInt(numerical) + 1).length >
          String(parseInt(numerical)).length ||
        numerical === startingZeros
      ) {
        console.log(`starting zeros: ${startingZeros.length}`);

        startingZeros =
          startingZeros.length > 1
            ? startingZeros.slice(startingZeros.length - 2)
            : "";

        result += startingZeros + String(parseInt(numerical) + 1);
      } else {
        result += startingZeros + String(parseInt(numerical) + 1);
      }
    }
  } else {
    result = string + "1";
  }

  return result;
};

console.log(
  // incrementString("foobar000"),
  // incrementString("foobar99"),
  // incrementString("foobar099"),
  // incrementString("foobar00999"),
  // incrementString("foobar00099"),
  incrementString("foo"),
  incrementString("")
);
