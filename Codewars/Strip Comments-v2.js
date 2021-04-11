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
// 6. Make sure to trim whitespace at the end of the line

// alt. Find positions of markers and carriage returns and record their values in an array
// iterate over the array using the two values and use slice or substr to put together the results

function solution(input, markers) {
  // Default result to input if there are no markers
  let result = "";
  let workStr = input;

  // Check input string for each of the marks
  markers.forEach((mark) => {
    // Check workStr for mark until none are there (in case there are more than one)
    while (workStr.indexOf(mark) !== -1) {
      // Add everything up until the mark to the return string
      result += workStr.substr(0, workStr.indexOf(mark)).replace(/ +$/, "");

      // Check for a carriage return and if so remove everything in the work string up until that or remove until the end
      if (workStr.indexOf("\n")) {
        // Extract after the carriage return until the end of the string
        workStr = workStr.substr(workStr.indexOf("\n"));
      } else {
        workStr = workStr.slice(0, workStr.indexOf(mark) - 1);
      }
    }
  });
  return result;
}

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
//   "#",
//   "!",
// ]);

var result = solution(
  "apples, plums % and bananas\npears\noranges !applesauce",
  ["%", "!"]
);

console.log(`The result is: \n${result}`);

// HERE WAS THE BEST PRACTICES SOLUTION
// function solution(input, markers) {
//   return input
//     .split("\n")
//     .map((line) =>
//       markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
//     )
//     .join("\n");
// }
