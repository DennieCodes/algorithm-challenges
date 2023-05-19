/* Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they 
consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: bill = [2, 4, 6]. Anna declines to eat item k = bill[2]
which costs 6. If Brian calculates the bill correctly, Anna will pay (2 + 4) / 2 = 3. If he includes the cost 
of bill[2], he will calculate (2 + 4 + 6) / 2 = 6. In the second case, he should refund 3 to Anna.

Function Description

Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. 
Otherwise, it should print the integer amount of money that Brian owes Anna.

bonAppetit has the following parameter(s):

bill: an array of integers representing the cost of each item ordered
k: an integer representing the zero-based index of the item Anna doesn't eat
b: the amount of money that Anna contributed to the bill

input: 
  bill - an array of integers
  k - integer of 0 base index of item Anna doesn't eat
  b - integer of money Anna has paid to the bill

output: Either
  1. Print Bon Appetit if Anna has paid correctly
  2. The difference Brian must pay Anna

constraints:
  1. at least 2 items will be in the array
  2. item Anna eats is from index 0 and < number of items in the array

pseudocode:
  1. We want to calculate the bill that Anna actually owes.
  2. Add up total bill (values in the array)
  3. Subtract the item that Anna didn't eat from total.
  4. Divide new total in half
  5. Compare new halved total to what Anna paid
  6. If they match then return Bon Appetit
  7. If they don't match then return integer value of what she is owed
*/

function bonAppetit(bill, k, b) {
	let total = bill.reduce((acc, cur) => (acc += cur));
	total -= bill[k];

	if (total / 2 === b) {
		console.log('Bon Appetit');
	} else {
		console.log(b - total / 2);
	}
}

// bonAppetit([2, 4, 6], 2, 6);
bonAppetit([3, 10, 2, 9], 1, 12);
// 24 total, 14 fair bill - 7 is half, she paid 12 which is 5 over so that's what she gets
