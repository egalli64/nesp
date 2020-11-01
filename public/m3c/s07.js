/*
 * More methods on arrays
 */

let data = new Array(5);
console.log('An array sized 5 but with nothing in it', data);

data.fill(0);
console.log('Better now, filled with zeroes', data);

let hello = Array.from('hello');
console.log('Generating an array _from_ a string', hello);

let aSlice = hello.slice(2, 4);
console.log('A slice of an array', aSlice);

hello.sort();
console.log('Sorted hello array', hello);

hello.sort((left, right) => left == right ? 0 : left < right ? 1 : -1);
console.log('Custom sort on hello', hello);

hello.reverse();
console.log('Reversed array', hello);

hello.forEach(item => console.log(item));
hello.forEach((item, pos) => console.log(`${pos}: ${item}`));

if (aSlice.every(s => s == 'l')) {
    console.log("Every item in aSlices is a lowercase l");
}

let filters = hello.filter(s => s > 'h');
console.log('Filted hello, more than "h"', filters);

let uppers = hello.map(s => s.toUpperCase());
console.log('Mapped array to uppercase', uppers);

console.log('First L is in position', uppers.indexOf('L'));
console.log('Last L is in position', uppers.lastIndexOf('L'));

let numbers = [1, 2, 3, 4, 5];
let product = numbers.reduce((a, b) => a * b);
console.log(`Reducing ${numbers} by multiplication: ${product}`);