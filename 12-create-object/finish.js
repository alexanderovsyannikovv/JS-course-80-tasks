/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const object = {
    userName: 'sasha',
    surname: 'ovsyannikov',
    favoriteNumber: 777,

    method: function() {
        console.log(`my name is ${this.userName}`)
    }
}

object.getSurname = function() {
    console.log(`my surname is ${this.surname}`);
}

object.method();
object.getSurname();