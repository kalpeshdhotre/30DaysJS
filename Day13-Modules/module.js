export const challengeName = "30 Days JS challenge";

export function addNumbers(n1, n2) {
  return `Sum of given number is ${n1 + n2}`;
}

export function multiplyNumbers(n1, n2) {
  return `Multiplication is ${n1 * n2}`;
}

export function combineString(str1, str2) {
  return `Combined string is ${str1 + str2}`;
}

export const person = {
  name: "kalpesh",
  country: "SF",
  age: 43,
};

export default function checkEvenNumber(number) {
  if (number % 2 === 0) {
    return `Number is EVEN`;
  } else {
    return `Number is ODD`;
  }
}
