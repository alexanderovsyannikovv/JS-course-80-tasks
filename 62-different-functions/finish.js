/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// ||||||| 1 ||||||| Function Declaration.

// Можно вызвать функицию до ее объявления.
firstFunction(2, 3)

function firstFunction(a, b) {
  return a + b
}

// Можно присвоить новое значение к индитификатору функции.
firstFunction = '123';
console.log(firstFunction);

// Доступны this и arguments


// ||||||| 2 ||||||| Function Expression.
const secondFunction = function (a, b) {
  return a + b
}

// вроде как эта функция быстрее