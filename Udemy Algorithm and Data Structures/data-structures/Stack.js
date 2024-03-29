class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.length;
	}

	pop() {
		if (!this.head) return null;

		let temp = this.first;
		if (this.length === 1) {
			this.last = null;
		}
		this.first = this.first.next;

		this.length--;
		return temp.value;
	}
}
