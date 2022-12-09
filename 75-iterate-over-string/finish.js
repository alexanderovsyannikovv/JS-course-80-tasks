/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// Напишите код здесь
// const strAfterSplit = str.split('');
// strAfterSplit.forEach((char) => {
//     if (vowels.includes(char)) {
//         vowelsCount++;
//     }
// });

// OR
for (const char of str) {
    if (vowels.includes(char)) {
        vowelsCount++;
    }
}

console.log(vowelsCount)
// 9