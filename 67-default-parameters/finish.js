/** ЗАДАЧА 67 - Параметры функции по умолчанию
 *
 * 1. Ответьте на следующий вопрос:
 *  - Почему в строке 12 мы не можем просто использовать оператор ИЛИ?
 *    mult = mult || 2
 *
 * 2. Перепишите функцию с использованием значения по умолчанию
 * для параметра mult в "multiplyBy"
 */


// при использовании или в условии при передачи нуля js перейдет к следующему операнду, т.к. 0 === false   (mult = mult || 2, где mult = 0)

// function multiplyBy(a, mult) {
//   mult = mult !== undefined ? mult : 2
//   console.log(a * mult)
// }

function multiplyBy(a, mult = 2) {
  console.log(a * mult)
}

multiplyBy(2)
// 4

multiplyBy(2, undefined)
// 4

multiplyBy(2, 0)
// 0

multiplyBy(5, 10)
// 50
