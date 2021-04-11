// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, 
// and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should 
// be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated 
// by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// Analysis
// 1. Input is a string
// 2. Output is that same string with every even index character in each word upper cased, and all odd characters lower cased
// 3. 0 is considered the first even letter
// 4. String will only contain alphabetical characters and spaces, spaces are only to separate words

// Pseudocode
// 1. Take the string and separate into an array of strings
// 2. Starting from 0, uppercase each even and lowercase each odd character
// 3. Return the entire converted string

// ORIGINAL SOLUTION
// function toWeirdCase(string){

//   // Separate the string into an array of strings
//   const splitStr = string.split(' ');
  
//   // Iterate through each string in the array and manipulate
//   const resultStr = splitStr.map(word => {
    
//     let newWord = "";
//     for (let i = 0; i < word.length; i++) {
//       if (i % 2 == 0) {
//         newWord += word.charAt(i).toUpperCase();
//       } else {
//         newWord += word.charAt(i).toLowerCase();
//       }
//     }
//     return newWord;
//   });

//   return resultStr.join(' ');
// }

// REFACTORED SOLUTION
function toWeirdCase(string){
  return string.split(' ').map(word => {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      if (i % 2 == 0) {
        newWord += word.charAt(i).toUpperCase();
      } else {
        newWord += word.charAt(i).toLowerCase();
      }
    }
    return newWord;
  }).join(' ');
}

// BEST PRACTICE CODEWAR
// function toWeirdCase(string){
//   return string.split(' ').map(function(word){
//     return word.split('').map(function(letter, index){
//       return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
//     }).join('');
//   }).join(' ');
// }

console.log(toWeirdCase('Here is a test string'));




