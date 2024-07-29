// Task 4: Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off.

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
