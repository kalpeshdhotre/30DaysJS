function factorial(num) {
  let factorial = num * (num - 1);
  console.log(factorial);

  for (let i = 2; i < num - 1; i++) {
    // factorial = factorial + num * (num - i);
    factorial = factorial * (num - i);
    console.log(factorial);
  }
  return factorial;
}
console.log(factorial(7));
