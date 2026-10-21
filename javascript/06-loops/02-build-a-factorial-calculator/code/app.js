function factorialCalculator(number) {
  let result = 1;

  for (let index = 1; index <= number; index++) {
    result *= index;
  }

  return result;
}

let num = 7;
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);
