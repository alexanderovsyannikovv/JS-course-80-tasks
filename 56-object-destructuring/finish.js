/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */


//Деструктиризацию можно выполнить в параметрах функции.
const personInfo = (person) => {
  const {name, age: personAge, location: {country: origin, city: homeCity}, friendsQty = 0} = person;

  return {
    name,
    personAge,
    origin,
    homeCity,
    friendsQty,

    createdAtYear: new Date().getFullYear()
  }
}

const person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London',
  },
}

const result = personInfo(person)

console.log(result)
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/
