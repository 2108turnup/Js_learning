// while, do while, for, for of, for in

// while
// Части цикла: итератор - шаг цикла, условие и действие
//пока в () тру цикл выполняется 

// let i = 0;

// while(i < 10) {
//   console.log(i);
//   i++;
// } счет может быть в () наверху счет с 0 до 9 , внизу с 1 до 10

// while(i++ < 10) {
//   console.log(i);
// }

// let i = 10;

// while(i--) {
//     console.log(i);
//   }

// do while

// do{
//   console.log('action')
// } while(i>0);


// for

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// };


// let str = 'Hello';

// let res = '';

// for (let i = 0; i < str.length; i++){
//   console.log(str[i] + '!');
//   res += str[i] + '*';
// };

// console.log(res);


// let colors = ['white', 'black', 'yellow', 'orange'];

// for (let i = 0; i<colors.length; i++){
//   colors[i] = colors[i].toUpperCase();
// }

// console.log(colors);

// break and continious 

// for (let i = 0; i < 10; i++) {
//   if(i===5){
//     continue;//пропускаем итерацию, цикл без 5 
//   }
//     console.log(i);
//   };

// for (let i = 0; i < 10; i++) {
//     if(i===5){
//       break;//если нашли пользователя, то стоп
//     }
//       console.log(i);
//     };

// const users = [
//   {
// name: 'Denis',
// age: 30,
// },
// {
//   name: 'Oleg',
//   age: 12
// },
// {
//   name: 'Maks',
//   age: 25
// },
// {
//   name: 'Olga',
//   age: 2
// },
// ];

// const usersObj = {};

// for (let i = 0; i < users.length; i++){
//   console.log(users[i].age)
//   usersObj[users[i].name] = users[i];
// }
// console.log(usersObj['Denis']);



// for in - свойства объекта prop and key

// const user = {
//   name: 'Denis',
//   age: 30
// };

// for (let key in user){
//   console.log(key);
//   console.log(user[key]);
// }

// for (let key in usersObj){
//   console.log(key);
//   console.log(usersObj[key]);
// }


// for of не нужно i и это более быстрый способ перебора
//для итеррация массива 

// for (let value of users){
//   console.log(value);
// }