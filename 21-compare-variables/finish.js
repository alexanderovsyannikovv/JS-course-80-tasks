/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'


// Напишите код здесь
let result = parseInt(myVariable1) <= parseInt(myVariable2);
console.log(result);

myVariable1 = '20'
myVariable2 = 100

// Напишите код здесь
result = parseInt(myVariable1) <= parseInt(myVariable2);
console.log(result);


// function

function comparison(value1, value2) {
    result = parseInt(myVariable1) <= parseInt(myVariable2);
    console.log(result);
}

comparison(myVariable1, myVariable2);