let prTask9_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 1000);
});
let prTask9_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second promise resolved");
  }, 798);
});
let prTask9_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third promise resolved");
  }, 3000);
});
let prTask9_4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Forth promise resolved");
  }, 799);
});

async function promiseAll() {
  const result = await Promise.race([prTask9_1, prTask9_2, prTask9_3, prTask9_4]);
  console.log(result);
}

promiseAll();
