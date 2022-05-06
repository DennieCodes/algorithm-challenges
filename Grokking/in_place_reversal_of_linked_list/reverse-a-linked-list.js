class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = null;
	}

	print_list() {
		let temp = this;
		while (temp !== null) {
			process.stdout.write(`${temp.value} `);
			temp = temp.next;
		}
	}
}

function reverse(head) {
	let current = head,
		previous = null;

	while (current !== null) {
		next = current.next;
		current.next = previous;
		previous = current;
		current = next;
	}

	return previous;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

process.stdout.write('Nodes of original Linked List are: ');
head.print_list();

result = reverse(head);
process.stdout.write('\nNodes of reversed Linked List are: ');
result.print_list();
