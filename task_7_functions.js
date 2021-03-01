// task 1
// function multiply() {
//   if (arguments.length === 0) {
//     console.log(0);
//     return 0;
//   }

//   let res = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     res *= arguments[i];
//   }
//   console.log(res);
//   return res;
// }

// // function multiply() {
// //   let res = 1;
// //   for (let i = 0; i < arguments.length; i++) {
// //     res *= arguments[i];
// //   }

// //   const output = arguments.length === 0 ? 0 : res;
// //   console.log(output);
// //   return output;
// // }

// multiply(2, 4, 5, 6);
// multiply();

// task 2
// function reverseString(x) {
//   let str = String(x);
//   let newStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   console.log(newStr);
//   return newStr;
// }

// reverseString("test");
// reverseString("");
// reverseString(null);
// reverseString(undefined);
// reverseString();

// task 3
// function getCodeStringFromText(x) {
//   let str = String(x).trim();
//   let newStr = "";
//   for (i = 0; i <= str.length - 1; i++) {
//     newStr += str[i].charCodeAt() + " ";
//   }
//   console.log(newStr);
//   return newStr;
// }

// getCodeStringFromText("hello");

// task 4
// function guessTheNumber(num) {
//   if (num <= 10 && num >= 0) {
//     let random = Math.round(Math.random());
//     if (random === num) {
//       return console.log("You win!");
//     } else {
//       return console.log(
//         `You are lose, your number is ${num}, the random number is ${random}`
//       );
//     }
//   } else if (typeof num !== "number") {
//     return console.error("Please provide a valid number");
//   } else {
//     return console.error("Please provide number in range 0 - 10");
//   }
// }

// guessTheNumber(1);
