// task 1
console.log(Number(Math.PI.toFixed(2)));
// task 2
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51), Math.min(15, 11, 16, 12, 51, 12, 13, 51));
// через массив не получилось сделать тк минимальнео значение не показывает
const list = [15, 11, 16, 12, 51, 12, 13, 51];
console.log(Math.max(list), Math.min(list));

//task 3
  //a
  console.log(Number(Math.random().toFixed(2)));  

  // b
  const X = 50;

  console.log(Math.round(Math.random()* X));

// task 4 
const a = 0.6;
const b = 0.7;

let sum = a+b;

console.log(Number(sum.toFixed(1)));

// task 5

console.log(parseInt('100$'));

console.log(`${Math.min(list)}, ${Math.max(list)}`);