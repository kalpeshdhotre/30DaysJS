// Activity 1: Add Two Numbers
// • Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// o Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// o Create a few test cases with linked lists and log the sum as a linked list.

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  static fromArray(arr) {
    const list = new LinkedList();
    for (let value of arr) {
      list.add(value);
    }
    return list.head;
  }
}

function addTwoNumbers(l1, l2) {
  let tempHead = new ListNode(0);
  let p = l1,
    q = l2,
    current = tempHead;
  let carry = 0;
  while (p !== null || q !== null) {
    let x = p !== null ? p.value : 0;
    let y = q !== null ? q.value : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return tempHead.next;
}

// function addTwoNumbers(l1, l2) {
//   let number1 = [];
//   let number2 = [];
//   let current1 = l1;
//   let current2 = l2;

//   while (current1 && current2) {
//     number1.unshift(current1.value);
//     number2.unshift(current2.value);
//     current1 = current1.next;
//     current2 = current2.next;
//     console.log(number1);
//     console.log(number2);
//   }
//   let total = Number(number1.join("")) + Number(number2.join(""));
//   return Array.from(String(total).split("").reverse(), Number);
// }

const l1 = LinkedList.fromArray([1, 3, 2, 1]); // represents the number 342
const l2 = LinkedList.fromArray([1, 4, 5]); // represents the number 465

const result = addTwoNumbers(l1, l2);
console.log(result);
