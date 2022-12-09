/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

function mult(object) {
  const {x , y, z} = object;
  return x * y * z;
}
// OR
// const mult = ({ x, y, z }) => x * y * z;


// Создайте функцию здесь

const result = mult(objectWithNumbers)
console.log(result)
// 300
