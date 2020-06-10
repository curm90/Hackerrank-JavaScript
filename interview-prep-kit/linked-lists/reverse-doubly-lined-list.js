// hackerrank.com/challenges/reverse-a-doubly-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  pop() {
    if (!this.head) return null;

    const prevNode = this.tail.prev;

    if (prevNode) {
      prevNode.next = null;
      this.tail = prevNode;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
  }

  insertBeginning(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  removeFirst() {
    if (!this.head) return null;

    const node = this.head.next;

    if (node) {
      node.prev = null;
      this.head = node;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
  }

  print() {
    let arr = [];
    let current = this.head;
    let counter = 0;

    while (counter < this.length) {
      arr.push(current.data);
      current = current.next;
      counter++;
    }
    console.log(arr);
  }

  reverse() {
    if (!this.head) return undefined;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let counter = 0;

    let prev = null;
    let next;

    while (counter < this.length) {
      next = node.next;
      node.prev = next;
      node.next = prev;
      prev = node;
      node = next;
      counter++;
    }
    return this;
  }
}

const dll = new DoublyLinkedList();

dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.reverse();

dll.print();

function reverse(head) {
  // place to store the current head pointer
  let current = head;

  // while current is not null
  while (current) {
    // place to store the currents next pointer
    let next = current.next;
    // set currents next value to currents prev value
    current.next = current.prev;
    // set current prev value to currents next value
    current.prev = next;
    // set the head to the current pointer
    head = current;
    // increment current
    current = next;
  }
  // return head
  return head;
}
