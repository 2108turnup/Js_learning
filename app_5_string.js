const firstName = 'Denis';
const lastName = 'Mescheryakov';
const age = 30;
const str = 'Hello my name is Denis';

let value;

value = firstName + lastName;
value = firstName + ' ' + lastName;
value += ' I am ' + age; // = value + " I am " + age;

value = firstName.length;// 5 
value = firstName[2];// n - second 
value = firstName[4]; // s - last one of 4 
value = lastName[lastName.length - 1]; // last element  = v
value = firstName[firstName.length - 1];// last elemnt = s 

value = firstName.toUpperCase();// верхний регист DENIS / toLowerCase()
value = firstName.concat(' ', lastName); // = value += ' I am ' + age;

value = firstName.indexOf('n');// индекс первого вхождения буквы - первый раз буква на втором месте\ 
value = str.indexOf('n', 10); //пробел тоже символ
value = str.indexOf('my'); // с 6 индекса

value = str.indexOf('!'); // -1 = ничего не найдено
value = str.includes('my'); // true действительно содержит

value = str.slice(0, 5); //получаем значение в промежутке 0-5 последний не учитывается 
value = str.slice(5); //выреэет начиная с 5 строки
value = str.slice(0, -3); //показывает с первого - 3 символа с конца
value = str.replace('Denis', 'Den'); //changed name to new version

console.log(value);