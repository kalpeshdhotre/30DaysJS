// let arrayTask4 = [1, 5, 2, 3, 4, 9];

// arrayTask4.pop();
// console.log(arrayTask4);

function revString(string) {
  let str = [...string];
  const ele = revString(str.pop());
  console.log(ele);
  return ele;
}

revString("abcd");
