// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists&h_r=next-challenge&h_v=zen

function sortedInsert(head, data) {
  // place to store a copy of the head
  let currentNode = head;
  // place to store node to insert
  const node = new DoublyLinkedListNode(data);

  // if empty list
  if (!head) {
    // set the head to the node to insert
    head = node;
    // return the head
    return head;
  }

  // if head is less than head.data
  if (data < head.data) {
    // set the nodes next value to the current head
    node.next = head;
    // set the current heads prev value to the new node
    head.prev = node;
    // return the new node
    return node;
  }

  // iterate over list until data is less than current node.data
  while (data > currentNode.data) {
    // place to store a reference to the current node
    let temp = currentNode;
    // increment node
    currentNode = currentNode.next;
    // if the current nodes next value is null
    if (temp.next === null) {
      // set temp.next value to new node
      temp.next = node;
      // set new nodes next value to null
      node.next = null;
      // set new nodes prev value to the current node
      node.prev = temp;
      // return head
      return head;
    }
  }

  // set the prev nodes next value to the new node
  let prevNode = currentNode.prev;
  // set the prev nodes next value to the new node
  prevNode.next = node;
  // set new node prev value to prevNode
  currentNode.prev = node;
  // set new node next value to currentNode
  node.next = currentNode;
  // set temps prev value to new node
  node.prev = prevNode;
  // return head
  return head;
}
