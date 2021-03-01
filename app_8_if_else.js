// >, <, >=, <=, ==(строгое равенство), ===(нестрогое равенство), 
// !=(нестрогое неравенсво), !==(строгое неравенство)

let value;

value = 1>2;
value = 1<=2;
value = 1==1;
value = 1 == '1'; //нестрогое равенство не обращает внимание на тип данных true
value = 1 == true;
value = 1 === '1'; //false
value = 1 != 1; //false
value = 1 !== '1';//true не равны по типу 
value = 'a' > 'a';//false
value = 'a' == 'A';//false 
value = 'a' > 'A'; //true разные порядок в UNICODE 97>65
value = 'a' > 'ab';//false 
value = 'A'.charCodeAt(); //65  код по UNICODE


// console.log(value);

// if (условие) {
//  action
// } else {
//   else action
// }

value = 10;
// if (value !== 10) { //всегда лучше строгое сравнение
// console.log('value: 10');
// } else {
//   console.log('else')
// }

//naN, Null, 0 = false и выполняется else

// if (value){
//   console.log('some action', value);
// } else {
//   console.log('else');
// }

// Логические операторы || = или, && = и,  ! = не

value = null;

// console.log(!value)  один восклечацельный знак проверяет не null(не false) и возвращает противоположное значение = true
// console.log(!!value) покажет текущее значение в буливом представление null= false
// так преобразовывают не буливые значения в булевые (true or false)


// если нет value то делаем действие, а value равно null = false, а значит его нет
// if (!value) {
//   console.log(value);
// }

//пустой [] = true

value = [];

// if(value.length){
//   console.log(value);
// } else {
//   console.log('array is empty');
// }


//проверяем является ли массивом
// if(Array.isArray(value)){
//   console.log(value);
// } else {
//   console.log('not an array');
// }

let user = {
  name: 'Denis'
};
// проверяем есть ли такая раздел в объекте
// if (user.name){
//   console.log(user.name);
// } else {
//   console.log('else')
// };

//есть ли у объекта такое свойство, но не проверяте знаечие 
// if (user.hasOwnProperty('name')){
//     console.log(user.name);
//   } else {
//     console.log('else')
//   };

// || = И каждое значение пытается прировнять к false, && = ИЛИ каждое пытается прировнять к true
// value = 1 || 0;
// console.log(value); //или останавливется на правдке, возвращает любой значение равное true

// value = 0 || 0 ||null;
// console.log(value); //возвращает последний false то есть null

// let age = 10;
// если возраст меньше или больше 
// if(age < 16 || age >65) {
//   console.log('some action')
// } else{
//   console.log('else')
// };


// let serverNickname = ''; если значение есть, то возвращает его, если пустое - действие
// let nickname = serverNickname || 'default nickname'

// console.log(nickname);

// value = 1 && 0 && 3;
// console.log(value); возвращает 0 тк 0 = false, если все true то последнюю true

// productPrice = 10;

// if (productPrice >=5 && productPrice <=20){
// console.log('беру');
// } else {
//   console.log('else');
// }

// console.log(value);

// лучше не делать больше 3 условий
// value = 10;

// if (value < 10){
//   console.log('value < 10', value)
// } else if (value >= 10){
//   console.log('value > 10', value)
// } else {
//   console.log('else'); 
// }
