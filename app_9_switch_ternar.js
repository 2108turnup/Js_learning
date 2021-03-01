// тернарные операторы

let a = 1;
let b =0;

// if (a>0){
//   b=a;
// }else{
//   b+=1;
// };

//выражение ? если true : если false;

//let c = a > 0 ? b = a : b+=1; //это неправило, лучше записать короче и логичнее


// b = a > 0 ? a : b + 1; 
// console.log(`b : ${b}`); 


//выражение ? если true : выражение ? если true : eсли false

b = a > 0 ? 2 : a <0 ? 3 : 0; //максимально желательный размер условия


// console.log(`b : ${b}`); 

// swith case - четко говорим из кааких значений переменная может состоять

// let color = 'red';

// switch(color){
//   case 'yellow' : 
//   console.log('Color is Yellow');
//   break;
//   case 'red' :
//     console.log('Color is red');
//     break;
//     default: 
//     console.log('Default');
// };


// два варианта сразу если действия одинаковые, то применяется 
let color = 'red';

switch(color){
  case 'yellow' : 
  case 'red' :
    console.log('Color is red || yellow');
    break;
    default: 
    console.log('Default');
};