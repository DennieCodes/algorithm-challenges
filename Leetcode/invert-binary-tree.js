/*

Given the root of a binary tree, invert the tree, and return its root.

Example 1:
    4
  2    7
1  3  6  9

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]


Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

*/

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

var invertTree = function (root) {
	if (!root) return null;

	const tmp = root.left;
	root.left = root.right;
	root.right = tmp;

	invertTree(root.left);
	invertTree(root.right);
	return root;
};

const result = invertTree(root);

function traverse(node) {
	if (node !== null) {
		console.log(node.val);
		traverse(node.left);
		traverse(node.right);
	}
}

traverse(root);
