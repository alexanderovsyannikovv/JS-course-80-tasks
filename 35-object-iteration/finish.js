/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

for (const key in myObject) {
  console.log(key, myObject[key]);
}

const myObjectKeys = Object.keys(myObject);
console.log(myObjectKeys);

myObjectKeys.forEach(element => {
  if (element === 'key1' || element === 'key3') {
    console.log(`Вот они, попались! Смотрите их начения: ${myObject[element]}`)
  } else {
    console.log('Ничего не нашел(((((((((((((((')
  }
});