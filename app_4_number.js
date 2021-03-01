// numbers

const num1 = 10;
const num2 = 20;
let value;

//+-/*
value = num1 + num2;
value = value + 100;//130
value += 100; //230
// value = 5 % 2; //1 4%2=0
value ++; //231
value --; //230
--value;
++value;

value = 0.6 + 0.7; //1.29999999999999999 
value = parseFloat(value.toFixed(2)); //1.30 = string not number, parsFloat make to number
value = (0.6*10+10*0.7)/10; //1.3 

//Math - object wich work with the numbers
value = Math.PI; // 3,14...
value = Math.random(); //random number
value = Math.round(2,4); //округление до целого числа
value = Math.ceil(2.1); //3 округление в большую сторону 
value = Math.floor(2.9); // 2 округление к меньшему
value = Math.min(2, 12, 15, 0, 12);// минимальное число из списка, max наоборот
value = Math.floor(Math.random()*10); // random under 10 = 8,12412, math floor random number 8

const arr = ['black', 'red', 'white', 'pink'];
value = Math.floor(Math.random()*arr.length); //number



console.log(value); // "pink"


