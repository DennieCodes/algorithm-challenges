/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

input: a string to evaluate
output: true if the string is a palindrome or false if it is not
notes: string is alphanumeric, convert to all lowercase, remove non-alphanumeric characters
       an empty string, or a single character string is a palindrome

pseudocode
0. create a return variable
1. iterate through the string char by char
2. convert char to lowercase
3. check if alphanumeric, if not then don't add to our return variable
4. if is, then add to return variable

5. iterate through the returned string from both ends, need pointers for both, left will move in (increment), right will move in (decrement)
6. on each iteration we will compare if left and right pointer are equal
7. if not equal then return false
8. otherwise, continue until both pointers are at the same position
9. return true

*/

var isPalindrome = function (s) {
	let result = '';
	const aVal = 'a'.charCodeAt(0);
	const zVal = 'z'.charCodeAt(0);
	const zerooVal = '0'.charCodeAt(0);
	const nineVal = '9'.charCodeAt(0);

	for (let i = 0; i < s.length; i++) {
		let char = s[i].toLowerCase();
		const cCode = char.charCodeAt(0);
		if (
			(cCode >= aVal && cCode <= zVal) ||
			(cCode >= zerooVal && cCode <= nineVal)
		) {
			result = result + char;
		}
	}

	let start = 0;
	let end = s.length - 1;

	while (start < end) {
		if (result[start] === result[end]) {
			start++;
			end--;
		} else {
			return false;
		}
	}

	return true;
};

const data = ['A man, a plan, a canal: Panama', 'race a car', ' '];

const result = isPalindrome(data[0]);
console.log(result);
