/* A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a given 
budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible 
to buy both items, return -1.

Example
b = 60
keyboards = [40, 50, 60]
drives = [5, 8, 12]

The person can buy a 40 keyboard + 12 usb drive = 52, or a 50 keyboard + 8 usb drive = 58. Choose the latter as the 
more expensive option and return 58.

Function Description

Complete the getMoneySpent function in the editor below.

input:
int array keyboards[n]: the keyboard prices
int array drives[m]: the drive prices
int b: the budget

output
int: the maximum that can be spent, or -1 if it is not possible to buy both items

pseudocode
1. make sure both arrays are sorted
2. set two pointers to the end of the array
3. add values at those two pointers
   if sum < budget then return sum
4.    

*/

function getMoneySpent(keyboards, drives, b) {
	/*
	 * Write your code here.
	 */
}

const result = getMoneySpent([3, 1], [5, 2, 8], 10);
console.log(result);
