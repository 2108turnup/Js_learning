const numArr = [2, 32, 1234, 54, 323];

let value;

value = numArr.length;
// numArr.length = 0;
// numArr.length = 100;
value = Array.isArray(numArr);
value = numArr[2];
numArr[2] = 12;
value = numArr.indexOf(32);

value = numArr.push(100); //добавление в конец массива
value = numArr.pop(); //удаляет последнйи элем массива
value = numArr.unshift(111); //добавляет в начало
value = numArr.shift(); //удаляет вначале массив
value = numArr.slice(0, 2); //удалил с 0 индекса 2 элем / () если оставить пустым, вернет копию массива
value = numArr.splice(1, 2, "one", "two"); // удалил два элемента с 1 индекса и на их место добавил
value = numArr.reverse(); //возвращает перевернутый массив
value = numArr.concat(1, 2, 3); // добавляет элем в массив, может создать копию массива, может добавляться как метод [].cancat()
value = numArr.join(" "); //весь массив в виде строки 
value = 'hello world'.split(); // '' - каждая буква будет элем массива, " " - по разделителю разоюбет на два слова

console.log(value, numArr);
