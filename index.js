/*

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

input: two sorted lists
output: the head of the merged linked list

*/

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

// Helper function
const returnLinkedList = (arr) => {
	if (!arr.length) return null;

	const nodes = arr.map((ele) => new ListNode(ele));

	for (let i = 0; i < nodes.length - 1; i++) {
		nodes[i].next = nodes[i + 1];
	}

	return nodes[0];
};

// Iterate over both lists while both are valid (not null)
// on each iteration compare values of each node and add lower value to head
// on which value was lower, set that node to equal the next node that it holds
// when this iteration ends it means one of the nodes is null
// if either null is not null then set then set next

var mergeTwoLists = function (list1, list2) {
	const dummy = new ListNode();
	let tail = dummy;

	while (list1 && list2) {
		if (list1.val < list2.val) {
			tail.next = list1;
			list1 = list1.next;
		} else {
			tail.next = list2;
			list2 = list2.next;
		}
		tail = tail.next;
	}

	if (list1) tail.next = list1;
	if (list2) tail.next = list2;

	return dummy.next;
};

// More efficient solution on LeetCode using recursion
var bestMergeTwoLists = function (l1, l2) {
	if (!l1) return l2;
	else if (!l2) return l1;
	else if (l1.val <= l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
};

const list1 = returnLinkedList([1, 2, 4, 6]);
const list2 = returnLinkedList([1, 3, 4, 5]);
let result = bestMergeTwoLists(list1, list2);

// console.log(result);

while (result) {
	console.log(result.val);
	result = result.next;
}
