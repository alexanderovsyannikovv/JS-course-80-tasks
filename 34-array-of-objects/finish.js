/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
        carBrand: 'BMW',
        price: 12000,
        isAvailableForSale: true,
    },
    {
        carBrand: 'Tayota',
        price: 6000,
        isAvailableForSale: false,
    },
    {
        carBrand: 'Lada',
        price: 4000,
        isAvailableForSale: true,
    },
]

const newCar = {
    carBrand: 'Tesla',
    price: 12000,
    isAvailableForSale: true,
}

cars.push(newCar);

console.log(cars);