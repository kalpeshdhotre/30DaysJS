/* Activity 2: Merge k Sorted Lists
Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.Create a few test cases with linked lists and log the merged list. */
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  // Min-Heap to keep the smallest element at the top
  const MinHeap = [];

  // Function to push nodes into the heap
  function pushHeap(node) {
    if (node) MinHeap.push(node);
  }

  // Function to pop the smallest element from the heap
  function popHeap() {
    return MinHeap.shift(); // Pop the smallest element from the heap
  }

  // Initialize the heap with the first node of each list
  for (let list of lists) {
    pushHeap(list);
  }

  // Function to build the sorted list from the heap
  let dummy = new ListNode();
  let current = dummy;

  while (MinHeap.length > 0) {
    // Extract the smallest node
    let node = popHeap();
    current.next = node;
    current = current.next;

    // If there is a next node in the list, push it into the heap
    if (node.next) {
      pushHeap(node.next);
    }
  }

  return dummy.next;
}

// Helper function to create linked lists from arrays
function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print linked lists
function printLinkedList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result);
}

// Example usage:
const lists = [createLinkedList([1, 4, 5]), createLinkedList([1, 3, 4]), createLinkedList([2, 6])];

const mergedList = mergeKLists(lists);
printLinkedList(mergedList);
