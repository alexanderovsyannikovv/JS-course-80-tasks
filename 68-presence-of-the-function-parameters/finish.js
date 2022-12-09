/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

function square(a) {
  try {
    if (a === undefined) throw new Error('Функция "square" не может быть вызвана без аргумента');
  } catch (error) {
    console.log(error.message);
  }

  console.log(a * a)


  // or
  // if (arguments.length === 0) {
    
  // }
}

square(10)
// 100

square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

// undefined * undefined = NaN (в функицю без аргемента передается undefined, потом при умножении undefined на undefined, js сработает автоматическое преобразование типов
// и он подумает что эти должно быть число