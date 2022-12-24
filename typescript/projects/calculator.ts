/**
 * Let's make a calculator 🧮
 */

// const calculate = (title: string, num1: number, num2: number): number => {
//   let result: number = 0;
//   switch (title) {
//     case "add":
//       result = num1 + num2;
//       break;
//     case "substract":
//       result = num1 - num2;
//       break;
//     case "multiply":
//       result = num1 * num2;
//       break;
//     case "divide":
//       result = num1 / num2;
//       break;
//     case "remainder":
//       result = num1 % num2;
//       break;
//   }
//   return result;
// };

type Keyword = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(keyword: Keyword, num1: number, num2: number): number {
  switch (keyword) {
    case "add":
      return num1 + num2;
      break;
    case "substract":
      return num1 - num2;
      break;
    case "multiply":
      return num1 * num2;
      break;
    case "divide":
      return num1 / num2;
      break;
    case "remainder":
      return num1 % num2;
      break;
    default:
      throw new Error("unknown error");
  }
}
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
