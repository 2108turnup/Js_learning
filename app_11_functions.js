// function declaration

// sayHello(); //можно вызывать перед объявлением
function sayHello(firstName = "Default", lastName = "Default") {
  if (!firstName) return console.error("Error");
  console.log(firstName, lastName);
  console.log("Hello world");
  return `Hello ${firstName} ${lastName}`; //${} для вызова переменных должен быть в ``
  // после return функция завершается, но можно несколько ретернов
}

// sayHello('Denis', 'Mescheryakov'); //вывод функции "Denis" - переменная

// let res = sayHello("Denis", "Mescheryakov");
// let res2 = sayHello("Dima", "Mescheryakov") + "!";
// let res3 = sayHello();

// console.log(res3);

//область видимости функции

// let x = 10;

// function foo() {
//   let x = 20; //локальная переменная и доступна только внутри функции
//   console.log(x)
// }

// foo();

// console.log(x);//функции не должны переопределять переменные

// function foo(x) { //обявленные внутри функции переменные - локальные
//     x = 20; //локальная переменная и доступна только внутри функции
//     console.log(x);
//     return x;
//   }

//   foo();

//   console.log(x);//функции не должны переопределять переменные

// const user = {
//   name: "Denis",
//   age: 30,
// };

// function getObj(obj) {
//   console.log(obj);
//   obj.name = "Den";
// }

// getObj(user);
// console.log(user);



// function expression
// функция объявляется в переменной и ее нельзя вызвать перед объявением
// const square = function (x){
//   return x*x;
// };

//самовызывающая и анонимная функция в нее можно закинуть другие функци чтобы не пустить их вне этого пространства
// (function (msg){
// console.log(msg)
// })('Hello world');


// function foo(x){
//   console.log(x);
//   console.log(arguments[2]); //это псевдо массив, который по факту объек. его можно перебирать циклами

//   for (let i=0; i < arguments.length; i++){
//     console.log(arguments[i]);
//   }
// }

// foo(11, 'some string', [1 , 2, 3]);

