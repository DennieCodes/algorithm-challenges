class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		// create a new node
		const newNode = new Node(val);

		// if head is null then the doubly linked list is being initialized
		// set the head and tail to the new node
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// else, set the tail.next to the new node and tail to new node
			// set a temp pointer to set the new node point back to previous tail node
			this.tail.next = newNode;
			// const temp = this.tail;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		// set the length to 1 or use an increment at the end
		this.length++;
		return this;
	}
}

const test = new DoublyLinkedList();

test.push('Documentation');
test.push('Stackoverflow');
test.push('MDN');
test.push('W3 Schools');

// console.log(test.head.next.next);
// console.log(test.head.next);
console.log(test);
