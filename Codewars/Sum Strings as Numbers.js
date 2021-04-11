// Given the string representations of two integers, return the string representation of the sum of those integers.

// sumStrings('1','2') // => '3'

let sumStrings = (a, b) => {
  const largerValueLength = a.length > b.length ? a.length - 1 : b.length - 1; // Set iteration value to be length of larger length
  let result = ""; // result will be the parsed string returned
  let carryOver = false;

  // Remove leading 0's from arguments before continuing
  a = a.replace(/^0+/, "");
  b = b.replace(/^0+/, "");

  // Compare length of both args, add difference of 0's to beginning of shorter arg
  if (a.length > b.length) {
    b = new Array(a.length - b.length + 1).join("0") + b;
  } else {
    a = new Array(b.length - a.length + 1).join("0") + a;
  }

  // Beginning from the end of the string, add the values together
  for (let i = largerValueLength; i >= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]);
    sum = carryOver ? sum + 1 : sum;

    // if sum is > 9 then set carryOver flag and record result of sum - 10
    if (sum > 9) {
      carryOver = true;
      result = String(sum % 10) + result;
    } else {
      carryOver = false;
      result = String(sum) + result;
    }

    // If there is a carryOver flag set and i == 0 then you need to append a 1 to result
    if (carryOver && i === 0) {
      result = "1" + result;
    }
  }

  return result;
};

console.log(
  sumStrings("", "5"),
  sumStrings("00103", "08567"),
  sumStrings("712569312664357328695151392", "8100824045303269669937"),
  sumStrings("060004864256161144370937424844", "31793296043714788646710965848"),
  sumStrings("068256016467644325202020746", "072323041935526931019956895099")
);

/*

Restate: You are given two strings which represent numbers.  You need to return a string of the sum of those two numbers.
         Make sure that the result is not in scientific notation which a large number will default to by JS.

Pseudocode Steps:

1. Take each of the two arguments and convert each to an integer, if blank string is given convert to 0
2. Since JS converts any large number to scientific notation then we need to essentially add them on our own
3. Since the output is expected to be a string then we can build the answer.
4. Iterate across both strings where we'll do our own "letter" by letter addition.  
5. Beginning from the smallest value or end of the string, add the values of a & b together also if carry over +1
6. If the sum of a & b is larger than 9 then set carry over value

*/

/* Best Practices / Clever Solution
-----------------------------------

function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}

*/
