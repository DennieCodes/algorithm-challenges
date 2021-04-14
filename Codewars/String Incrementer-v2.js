const incrementString = (string) => {
  const numericalRegEx = /\d/g; // RegEx to test or match numerical value
  const charRegEx = /\D/g; // RegEx to match character portions of string
  const startingZeroRegEx = /^0+/; // RegEx to test 0 at start of a string

  let result = "";

  // Test for any numbers in input string
  if (numericalRegEx.test(string)) {
    // Test for character portion of string and if so add string to return result
    if (charRegEx.test(string)) {
      result = string.match(charRegEx).join("");
    }

    // Extract the numerical portions of the string
    let numerical = string.match(numericalRegEx).join("");

    // Test for any 0's in the numerical portion
    if (startingZeroRegEx.test(numerical)) {
      // Extract the starting zeros
      let startingZeros = numerical.match(startingZeroRegEx).join("");

      // Compare length of numerical versus itself +1, add 0's or subtract 1
      if (
        String(parseInt(numerical) + 1).length >
          String(parseInt(numerical)).length ||
        startingZeros === numerical
      ) {
        result += startingZeros.slice(0, startingZeros.length - 1);
      } else {
        result += startingZeros;
      }
    }

    result += String(parseInt(numerical) + 1);
  } else {
    // If no numbers in input then return string and append "1"
    result = string + "1";
  }

  return result;
};

console.log(
  incrementString("foobar000"),
  incrementString("foobar99"),
  incrementString("foobar099"),
  incrementString("foobar00999"),
  incrementString("foobar00099"),
  incrementString("foo"),
  incrementString("")
);

function incrementStringAlt(input) {
  if (isNaN(parseInt(input[input.length - 1]))) return input + "1";

  return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

/* BEST SOLUTIONS ON CODEWARS

function incrementStringAlt(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

function incrementString(input) {
  return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
      return +d + 1 + ns.replace(/9/g, '0');
    });
}

let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

*/
