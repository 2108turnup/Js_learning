// task 1

// function getArray(num) {
//   let newArr = [];
//   for (i = 1; i <= num; i++) {
//     newArr.push(i);
//   }
//   console.log(newArr);
//   return newArr;
// }

// getArray(10);

// task 2
// function doubleArray(arr) {
//   let newArr = arr.concat(arr);
//   return console.log(newArr);
// }

// doubleArray([1, 2, 3]); // [1,2,3,1,2,3]

// task 3
// Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]
// Не забудьте про проверкку того что массив является массивом. Это можно сделать с помощью метода Array.isArray(arr);

// function changeCollection(arguments) {
//   let newArr = [];
//     for (i = 0; i < arguments.length; i++) {
//       if (Array.isArray(arguments)) {
//         newArr = arguments.shift();
//       }
   
//     }

//   return console.log(newArr);
// }

// console.log(changeCollection([1, 2, 3]));


// task 4
