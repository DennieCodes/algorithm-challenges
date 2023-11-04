class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
			this.length = 1;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
			this.length++;
		}
	}
}

const SLL = new SinglyLinkedList();
SLL.push('Heidi ');
SLL.push('Chan');
SLL.push('GSD');

console.log(SLL);
