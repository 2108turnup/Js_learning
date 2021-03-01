let value;

// number to string
value = String(10);
value = String(10+40);
value = (40).toString(); // that is method when you change using toString or somesing same
//boolean to string
value = String(false);
//array to string
value = String([1, 2, 3,]);
//object to string
value = String({name : 'Denis'})

value = 30 + '' +30; // unswer 3030 not 60 it's called concatenation конкатынация - преобразование к числу
value = 30 - '5'; // answer 25 
value = true + 10; // answer 11 because true = 1, null and false = 0, undefined = NaN - not a number

//string to number
value = Number('23');
value = Number(false); // answer 0 as before
value = Number([1,2,3]); //NaN

value = parseInt('200px'); //answer 200
value = parseFloat('200.212px'); // answer 200.212

//Boolean
value = Boolean('fsa'); // each empty or 0 or undefined or null = false, each full or array[] or object{}= true even space


console.log(value);
console.log(typeof value);

