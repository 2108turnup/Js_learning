//MIne version
//Получить число pi из Math и округлить его до 2-х знаков после точки
let value; 

value = Math.PI; 
value = value.toFixed(2);

console.log(value);

const pi = Number(Math.PI.toFixed(2));
// ! Помните что toFixed возвращает строку поэтому лучше еще делать явное преобразование к числу
// ! Вы можете использовать функцию Number или parseFloat
console.log(pi);

//Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value); // mistaken

const minNum = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
const maxNum = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(minNum, maxNum);

//Работа с Math.random:

//a. Получить случайное число и округлить его до двух цифр после запятой

// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
 
value = Math.random().toFixed(2); //a
value = Math.round(Math.random()); //b

// а. Получить случайное число и округлить его до двух цифр после запятой
const random = Number(Math.random().toFixed(2));

// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
const X = 20;
const randomX = Math.round(Math.random() * X);
console.log(randomX);

//Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
value = 0.6 + 0.7;
value = parseFloat(value.toFixed(1)); // 1.3 but not a number
//value = (0.6*10 + 0.7*10)/10; //1.3 number

const fixNum = Number(0.6 + 0.7).toFixed(1);
console.log(fixNum);
// * https://learn.javascript.ru/number#netochnye-vychisleniya


//Получить число из строки ‘100$’

// value = parseInt{'100$');
// console.log(); //mistaken


const numFromStr = parseFloat("100$");
console.log(numFromStr);
