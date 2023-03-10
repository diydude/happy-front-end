// 1)
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
	let arr = str.split('-'); // разбивает строку на массив ['string', 'for', 'example']
	let capArr = arr.map((word, index) => { // капитализует
		if (index === 0) return word // исключая первый элемент
		else return word.charAt(0).toUpperCase() + word.slice(1);
	});
	return capArr.join(''); // склеивает без пробелов и запятых
}
console.log(camelize('string-for-example'));

// 2)
// Задача: написать функцию, принимающую массив чисел
// и возвращающую сумму всех его положительных элементов и отрицательных 
// чисел отдельно в виде нового массива

// например функция принимает как аргумент следующий массив
// arr = [1, -2, 3, 4, -9]
// и должна вернуть [8, -11]

// Сохраняйте вызов этой функции через деструктурирующее присваивание

let sumOfPositiveAndNegativeNumbers = (array) => {
	let positiveNumbers = array.reduce((sum, num) => {
		if (num > 0) sum += num;
		return sum;
	}, 0);
	let negativeNumbers = array.reduce((sum, num) => {
		if (num < 0) sum += num;
		return sum;
	}, 0);
	let sumArray = [positiveNumbers, negativeNumbers];
	return sumArray;
}

const arr = [1, -2, 3, 4, -9];
const [sumOfPositive, sumOfNegative] = sumOfPositiveAndNegativeNumbers(arr);
console.log(sumOfPositive, sumOfNegative);