// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// returns 'Bart'

// list([])
// returns ''

// Problem Solving Analysis
// 1. Input: An ARRAY of objects with key: name
// 2. Output is a STRING with the values in those keys combined, separated by the comma except for the last one which uses an ampersand

// Pseudocode
// 1. Take the array of hashes and extract the values in name and combine into a string but separate by a comma and space
//    You can use a reduce to iterate through the array and accumulate the values
// 2. Find the last comma and space and replace with an ampersand.

function list(names) {
  return names.reduce((acc, cur, idx) => {
    return idx == names.length - 1
      ? acc + cur.name
      : idx < names.length - 2
      ? acc + cur.name + ", "
      : acc + cur.name + " & ";
  }, "");
}

const result = list([{ name: "Bart" }]);
// const result = list([{ name: "Bart" }, { name: "Lisa" }]);
// const result = list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);
console.log(result);
