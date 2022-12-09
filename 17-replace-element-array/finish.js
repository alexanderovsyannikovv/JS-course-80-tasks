/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 *
 * 2. Выведите в консоль весь массив
 *
 * 3. Замените второй элемент массива на другой
 *
 * 4. Выведите в консоль измененный массив
 */

 const myArray = [1, 'mirana', false];

 for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
 }

 myArray[1] = 'lina';

 for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
 }


 // fun
 function showArray(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
     }
 }

 showArray(myArray);

 myArray[2] = true;

 showArray(myArray);
