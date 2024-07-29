// let arrayTask4 = [1, 5, 2, 3, 4, 9];

// arrayTask4.pop();
// console.log(arrayTask4);

function revString(string) {
  if (string.length <= 1) {
    return string;
  }
  return revString(string.slice(1)) + string[0];
}

console.log(revString("abcd"));
