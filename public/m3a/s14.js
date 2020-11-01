/**
 * String
 */

// three ways of delimiting a string
let a = 'the ';
let b = "answer ";
let c = `is `;

// "adding" string -> concatenation, numbers are implicitly converted to string
let d = 42;
let e = a + b + c + 42;
console.log('implicit conversion number to string:', e, e === 'the answer is 42');

// using template literals
console.log(`The answer is ${d}!`);

console.log('Explicit conversion number to string:', d, d.toString() === '42');
console.log('Explicit conversion string to number:', Number('42.7') === 42.7);
console.log('Explicit conversion string to int:', parseInt('42') === 42);

console.log("Usually it works, but don't trust it, use Math.floor() instead:", parseInt('42.7') === 42);
console.log('Parsing a non number as int leads to NaN:', isNaN(parseInt('hello')));
