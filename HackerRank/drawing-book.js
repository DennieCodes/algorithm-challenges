/*
A teacher asks the class to open their books to a page number. A student can either start turning pages from the 
front of the book or from the back of the book. They always turn pages one at a time. When they open the book, 
page 1 is always on the right side:

_|1

When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. 
The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a 
student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or 
the end of the book.

Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

Example
n = 5
p = 3

1 -> 2|3 -> 4|5

Using the diagram above, if the student wants to get to page 3, they open the book to page 1, flip 1 page and they 
are on the correct page. If they open the book to the last page, page 5, they turn 1 page and are at the correct 
page. Return 1.

pageCount has the following parameter(s):
  int n: the number of pages in the book
  int p: the page number to turn to
Returns
  int: the minimum number of pages to turn

Notes:
  1. if page # is odd then last page has last 2 #'s, else even # has only last page on left
  2. first page has #1 on right

pseudocode
  1. If the page number is > 1/2 of number of pages then start from back, otherwise start from from.
     alt. do both calculations and return lower number
  2. Divide the number of pages of that side by 2, up to the target page number.
  3. Return number of page turns

*/

// NOTE: What is target page is on the same page?

function pageCount(n, p) {
	if (p < n * 0.5) {
		if (p % 2 === 0) {
			return p / 2;
		} else {
			return p - 1 / 2;
		}
	} else {
		return Math.ceil((n - p) / 2);
		// 	if (n % 2 === 0) {
		// 		return Math.ceil((n - p) / 2);
		// 	} else {
		// 		return (n - p) / 2;
		// 	}
		// }
	}
}
// 1 -> 2|3 -> 4|5 -> 6|7 -> 8|9

console.log(pageCount(5, 4));
