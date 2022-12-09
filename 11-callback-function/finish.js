/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

function getGreetings() {
    console.log('Hello, world!');
} 

setTimeout(() => getGreetings(), 4000);
setTimeout(() => console.log('hi'), 5000);
