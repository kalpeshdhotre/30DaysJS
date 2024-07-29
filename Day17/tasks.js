// Day 17: Data Structures
// Tasks/Activities:

// Activity 1: Linked List
// • Task 1: Implement a Node class to represent an element in a linked list with properties value and next .
class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

// • Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to add new node
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      // if there no element in linked list add new node to head
      this.head = newNode;
      return;
    }
    let current = this.head; // if there are element in linked list then traverse to the end of the lined list and add to the end
    while (current.next) {
      current = current.next;
    }
    current.next = newNode; // add new node to the end of the list
  }

  // Method to print all list
  displayAll() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(21);
list.append(23);
list.append(34);
list.append(54);
list.append(65);
list.displayAll();

// Activity 2: Stack
// • Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
  constructor() {
    this.items = []; // Array to Store stack elements
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return `Stack is empty`;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return `Stack is empty`;
    }
    return this.items[this.items.length - 1];
  }
}

const task3Stack = new Stack();
task3Stack.push(3);
task3Stack.push(2);
task3Stack.push(1);
console.log(task3Stack.peek());
task3Stack.pop();
console.log(task3Stack.peek());

// • Task 4: Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off.

class ReverseString {
  constructor() {
    this.stack = [];
  }

  reverse(str) {
    if (str.length === 0) {
      return `String empty`;
    }
    // add string character to Stack(Array)
    for (let i = 0; i < str.length; i++) {
      this.stack.push(str[i]);
    }
    console.log(this.stack);

    let reverseStr = "";

    while (this.stack.length > 0) {
      reverseStr += this.stack.pop();
    }
    return reverseStr;
  }
}

const task4 = new ReverseString();
console.log(task4.reverse(`12345`));

// Activity 3: Queue
// • Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
  constructor() {
    this.arrayQueue = [];
  }

  enqueue(ele) {
    this.arrayQueue.push(ele);
  }

  dequeue() {
    return this.arrayQueue.shift();
  }

  viewFirstElement() {
    return this.arrayQueue[0];
  }
}

const task5 = new Queue();
task5.enqueue(2);
task5.enqueue(5);
task5.enqueue(7);
task5.enqueue(9);
console.log(task5.viewFirstElement());
console.log(task5.dequeue());
console.log(task5.viewFirstElement());

// • Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class Printer {
  constructor() {
    this.printerJobArray = [];
  }

  addPrintJob(str) {
    this.printerJobArray.push(str);
  }

  print() {
    let currentPrintJob;
    while (this.printerJobArray.length > 0) {
      currentPrintJob = this.printerJobArray.shift();
      console.log(currentPrintJob);
    }
  }
}

const newPrint = new Printer();
newPrint.addPrintJob("task1");
newPrint.addPrintJob("task2");
newPrint.addPrintJob("task3");
newPrint.addPrintJob("task4");
newPrint.print();

// Activity 4: Binary Tree
// • Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value , left , and right
class BinaryTreeNode {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

// • Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Method to insert a value into the binary tree
  insert(value) {
    const newNode = new BinaryTreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a node in the binary tree
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Method for in-order traversal
  inOrderTraversal(node = this.root, result = []) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }
}

// Example usage
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-order Traversal:", tree.inOrderTraversal());

// Activity 5: Graph (Optional)
// • Task 9:  Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
// • Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

// Feature Request:
// 1. Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.
// 2. Stack Script: Create a script that implements a stack and uses it to reverse a string.
// 3. Queue Script: Write a script that implements a queue and simulates a printer queue.
// 4. Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.
// 5. Graph Script: Write a script that implements a graph and performs breadth-first search (optional).
