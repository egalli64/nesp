/**
 * Arithmetic operators
 */

console.log('2 + 3 is', 2 + 3);
console.log('0.1 + 0.2 is', 0.1 + 0.2, '(floating point addition)');

console.log('2 - 3 is', 2 - 3);

console.log('2 * 3 is', 2 * 3);

console.log('2 / 3 is', 2 / 3, '(floating point division)');

console.log('2 % 3 is', 2 % 3);
console.log('2.3 % 2.1 is', 2.3 % 2.1);

console.log('cube of 2 is', Math.pow(2, 3), '(classic)');
console.log('cube of 2 is', 2 ** 3, '(ES 6)' );

let value = 8;
console.log('initial value', value);
console.log('pre-increment', ++value);
console.log('pre-decrement', --value);
console.log('post-increment', value++);
console.log('post-decrement', value--);
console.log('final value', value);
