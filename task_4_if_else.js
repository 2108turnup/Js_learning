// Преобразование примитивов
// let a = 0 || 'string'; // 'string' оператор || возвращает true или последний false
// let a = 1 && 'string'; // "string" оператор || возвращает последний true or first false
// let a = null || 25; // 25 = true
// let a = null && 25; // null = false 
// let a = null || 0 || 35; // 35 = true;
// let a = null && 0 && 35; // null = first false

// console.log(a); 

// value = 12+14+'12'; // сумма 12+14 и "12" = 2612 - конкатенация 
// value = 3+2-'1'; // консоль приводит все к числу
// value = '3'+2-1; //31 конкатенаци разницы 2-1 
// value = true + 2; //3, true = 1, false = 0
// value = +'10'+1 // 11, унарный плюс превращает строку в число и происходит сложение чисел
// value = undefined + 2; //NaN, undefined не приводится к числу
// value = null + 5; //5, null = 0
// value = true + undefined; //NaN, true = 1, но Undefined не приводится к числу

// console.log(value);



//IF ELSE

//Task 1

// let value = 'property';

// if(value === 'hidden'){
//   value = 'visible';
// } else {
//   value = 'hidden';
// }; 

// console.log(value);


// Task 2
// let value = 5;

// if (value === 0){
// value = 1;
// } else if(value < 0){
//   value = 'less then zero';
// } else if (value > 0){
//   value *= 10;
// };

// console.log(value);


//task 3
// let car = {name: 'Lexus', age: 10, create: 2008, needRepair: false};
// if (car.age > 5){
//   car.needRepair = true; 
//   console.log('Need Repair')
// } else {
//   car.needRepair = false; 
// }

// console.log(car); // needRepair: true

// task 4

// let item = { name: 'Intel core i7', price: '100$', discount: '15%' };

// if (item.discount && item.discount !== NaN && item.price !== NaN){
//   item.priceWithDiscount = parseFloat(item.price) - parseFloat(item.price) * parseFloat(item.discount)/100;
//   console.log(item.priceWithDiscount);
// } else {
//   console.log(item.price);
// }

// task 5

// let product = {
//   name: 'Яблоко',
//   price: '10$'
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// if (parseFloat(product.price) <= max && parseFloat(product.price) >= min) {
//   console.log(product.name);
// } else {
//   console.log('Product not exist');
// }


// без parseFloat выдает "Product not exist", может не так понял задание 