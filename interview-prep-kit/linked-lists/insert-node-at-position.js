// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists

function insertNodeAtPosition(head, data, position) {
  // place to store the head
  let node = head;
  // place to store the current index
  let i = 0;

  // while current index is less than position - 1
  while (i < position - 1) {
    // increment the head
    node = node.next;
    // increment the index
    i++;
  }

  // place to store the node to replace
  let temp = node.next;
  // set the node at the given position to a new list node
  node.next = new SinglyLinkedListNode(data);
  // set the next nodes next node to the node we replaced / moved
  node.next.next = temp;
  // return the head
  return head;
}
