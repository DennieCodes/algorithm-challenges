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
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
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
