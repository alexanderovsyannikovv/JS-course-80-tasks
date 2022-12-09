/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

// Создайте функцию здесь
const sumObjectValues = object => {
  let sum = 0;
  
  Object.keys(object).forEach(key => {
    if (typeof object[key] === 'number') {
      sum = sum + object[key];
    }
  })
  return sum;
}

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
