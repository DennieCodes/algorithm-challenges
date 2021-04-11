// Function receives two arrays and subtracts from A, any and all instances of items from B

function arrayDiff(a, b) {
  return b.reduce((acc, cur) => {
    return acc.filter(item => item !== cur);
  }, a);

  // Top result on Codewars
  // return a.filter(item => !b.includes(item));
}

console.log(arrayDiff([1,2,3,4,5], [,3,5]));