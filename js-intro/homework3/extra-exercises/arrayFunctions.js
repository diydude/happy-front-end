// Задачи для решения

// Работа с concat
// Для решения задач данного блока вам понадобятся следующие методы: concat.
// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

let arr0 = [1, 2, 3],
    arr1 = [4, 5, 6];
let arr2 = arr0.concat(arr1);
console.log(arr2);

// Работа с reverse
// Для решения задач данного блока вам понадобятся следующие методы: reverse.
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

let array = [1, 2, 3];
array.reverse();
console.log(array);

// Работа с push, unshift
// Для решения задач данного блока вам понадобятся следующие методы: push, unshift.
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

let arrayA = [1, 2, 3];
arrayA.push(4, 5, 6);
console.log(arrayA);

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

let arrayB = [1, 2, 3];
arrayB.unshift(4, 5, 6);
console.log(arrayB);

// Работа с shift, pop
// Для решения задач данного блока вам понадобятся следующие методы: shift, pop.
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

let arrayC = ['js', 'css', 'jq'];
let arrayD = arrayC.shift();
console.log(arrayD);

// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

let arrayE = ['js', 'css', 'jq'];
console.log(arrayE.pop());

// Работа с slice
// Для решения задач данного блока вам понадобятся следующие методы: slice.
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

let arrayF = [1, 2, 3, 4, 5];
let arrayG = arrayF.slice(0, 3);
console.log(arrayG);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

let arrayH = [1, 2, 3, 4, 5];
let arrayI = arrayH.slice(3);
console.log(arrayI);

// Работа с splice
// Для решения задач данного блока вам понадобятся следующие методы: splice.
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

let arrayJ = [1, 2, 3, 4, 5];
let arrayK = arrayJ.splice(1, 2);
console.log(arrayJ);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

let arrayL = [1, 2, 3, 4, 5];
let arrayM = arrayL.splice(1, 3);
console.log(arrayM);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arrayN = [1, 2, 3, 4, 5];
arrayN.splice(2, 0, 'a', 'b', 'c');
console.log(arrayN);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arrayO = [1, 2, 3, 4, 5];
arrayO.splice(1, 0, 'a', 'b'); // [1, 'a', 'b', 2, 3, 4, 5]
arrayO.splice(6, 0, 'c'); // [1, 'a', 'b', 2, 3, 4, 'c', 5]
arrayO.splice(8, 0, 'e'); // [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
console.log(arrayO);

// Работа с sort
// Для решения задач данного блока вам понадобятся следующие методы: sort.
// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

let arrayP = [3, 4, 1, 2, 7];
console.log(arrayP.sort());

// Работа с Object.keys
// Для решения задач данного блока вам понадобятся следующие методы: Object.keys.
// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

let obj = {js:'test', jq: 'hello', css: 'world'};
let arrayQ = Object.keys(obj);
console.log(arrayQ);