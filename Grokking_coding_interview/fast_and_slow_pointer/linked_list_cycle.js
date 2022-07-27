class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const has_cycle = (head) => {
  let slow = head,
    fast = head;

  while (fast != null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
