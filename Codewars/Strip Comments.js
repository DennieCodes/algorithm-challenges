/* Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
   Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
result should == "apples, pears\ngrapes\nbananas"
*/

// Inputs
// 1. String input that needs to be parsed with the result being returned
// 2. markers is an array of strings that indicate the text that follows up until the carriage return is a comment

// Pseudocode
// 1. Search the string until any number of markers is present
// 2. Keep everything up until the marker
// 3. Remove everything from the marker until the next carriage return
// 4. How can you tell you're at the end of the string if parts of it are being removed
// 5. What happens if there are no comments passed in?

// alt. Find positions of markers and carriage returns and record their values in an array
// iterate over the array using the two values and use slice or substr to put together the results

function solution(input, markers) {
  // The following code extracts everything up until the marker and will need to be repeated until the end of the string or no more markers are found

  // workStr will represent input string as it is processed
  let workStr = input;

  // Returns the next position of any number of markers passed into the function
  let markPos = markers.reduce((acc, cur) => {
    // In the first run, indexOf(cur) is 14, position of #, but second run becomes -1 since there is none
    let accIndex = acc == 0 ? workStr.indexOf(cur) : acc;
    // Likewise, first run gets 14 but subsequent -1
    let curIndex = workStr.indexOf(cur);

    // if (accIndex == -1 && curIndex == -1) return 0

    return accIndex < curIndex ? accIndex : curIndex;
  }, 0);

  // If markPos = -1, meaning no markers then return the workStr
  if (markPos == -1) return workStr;

  // Extracts and records everything up until marker
  let result = input.substr(0, markPos);

  // Extract everything after marker up until carriage return
  workStr = workStr.substr(workStr.indexOf("\n"));

  // Combine both strings which is the new working string
  result += workStr;

  return solution(result, markers);
}

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
//   "#",
//   "!",
// ]);

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
  "#",
  "!",
]);

console.log(`The result is: ${result}`);
