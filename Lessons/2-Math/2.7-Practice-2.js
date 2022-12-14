/*
Вычисляем расстояние между двумя точками.
Даны координаты x, y 2-х точке. Нужно вывести расстояние между ними.
Вычисляем по теореме Пифагора.
*/

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(Math.sqrt(
  Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)
));

/*
Сравниваем 2 дробных числа с указанной точностью.
Даны 2 числа и кол-во знаков после запятой, которое необходимо учитвать.
Вывести информацию, равны ли эти числа, больше ли первое число или меньше второго.
*/

let first = 0.1 + 0.2 + 0.033;
let second = 0.33334;
let precision = 3;

let firstNormalized = Math.round(
  first * Math.pow(10, precision)
);
let secondNormalized = Math.round(
  second * Math.pow(10, precision)
)

console.log('Исходные числа равны', first === second);
console.log('Числа равны', firstNormalized === secondNormalized);
console.log('Первое число больше', firstNormalized > secsecondNormalizedond);
console.log('Первое число меньше', firstNormalized < secsecondNormalizedond);

/*
Герератор случайных целых чисел между n до m.
Учесть, что n необязательно меньше, чем m!
*/

let n = -100;
let m = 350;

// кол-во цифр, которые могут быть сгенерированы
let range = Math.abs(m - n);
// округлённое число от 0 до range
let numberInRange = Math.round(Math.random() * range);
// левая граница возможного числа
let min = Math.min(n, m);

console.log(min + numberInRange);

/*
Выводим отдельно целую и дробную части числа с точностью n.
*/

let precisionN = 3;
let number = 0x12f + .3 + .1;

console.log('Исходное число', number); // 303.400000000003

console.log('Целая часть', Math.floor(number));
// остаток от деления на 1 возвращает дробную часть
console.log('Дробная часть', Math.round(number % 1 * Math.pow(10, precisionN)));