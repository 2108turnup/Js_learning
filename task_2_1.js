let string = 'some test string';

//task 1
let firstLetter = string[0];
let lastLetter = string[string.length - 1];

console.log(firstLetter, lastLetter);
//task 2 

console.log(firstLetter.toUpperCase(), lastLetter.toUpperCase());

// task 3
console.log(string.indexOf('string'));

// task 4
console.log(string.indexOf(' ', 5));

const splittedString = string.split(' ');
const secondSpaceIndex = splittedString[0].length + splittedString[1].length + 2;
console.log(secondSpaceIndex);

// task 5
console.log(string.slice(4, -7));
console.log(string.substring(4,9));

// task 6
console.log(string.slice(4, 8));
console.log(string.substring(4, 8));

// task 7
console.log(string.slice(0, -6));
console.log(string.substring(0, string.length - 6));

// task 8
const a = 20;
const b = 16;

console.log(string = a + '' +b);// конкатенация