// Task: concatenate one or more letters to the end of a given input string to create a string that reads the same forward
// as backward.

// Specifications

// Letters can only be added to the right hand side of the input string.

// You are required to add at least one letter to the input string.

// The shorter return string is the correct one. ie.. (ab)=> abba is Wrong, while (ab)=> aba is Right.

// Inputs will consist of one or more letters, upper and lower case.

// Strings are case sensitive. ie..(Gn)=> gng is Wrong, while (Gn)=> GnG is right.

// Examples:

// (a) => a + a => aa

// (GG) => GG + G => GGG

// (Ab) => Ab + A => AbA

// (aba) => aba + ba => ababa

// (aab) => aab + aa => aabaa

// input: string
// output: create a (string) palindrome from the string by appending letters from the front to the end

// 1. Your goal is to create the shortest palindrome from the input string
// NOTE: a palindrome is a word that reads the same forward and backward
// 2. You will add one character at a time from the front of the string to the end
// * Incorrect, not the front of the string
// 3. Each time you do so you will compare the palindrome forwards and backwards

// You can iterate over the str, letter by letter
// Starting with a copy of str, you can append each letter onto the copy
// You can then compare the copy to a reverse of itself to see if it's a palindrome
// If it's not a palindrome then continue the iteration until it is and return that word

const youCompleteMe = (str) => {
	for (let i = 1; i <= str.length; i++) {
		if (str.slice(i) === [...str.slice(i)].reverse().join('')) {
			return str + [...str.slice(0, i)].reverse().join('');
		}
	}
};

const palindrome = youCompleteMe('aBaBY');
console.log(palindrome);
