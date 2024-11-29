/**
 * Introduction to Web technologies
 * 
 * JavaScript - Logical (and bitwise) operators
 * 
 * https://github.com/egalli64/web-intro
 */

let alpha = true;
let beta = false;

console.log('alpha', alpha);
console.log('beta', beta);

console.log('!alpha', !alpha);
console.log('alpha && beta', alpha && beta);
console.log('alpha || beta', alpha || beta);
console.log('alpha & beta', alpha & beta);
console.log('alpha | beta', alpha | beta);

let gamma = 0b101;  // 5
let delta = 0b110;  // 6
console.log('gamma', gamma);
console.log('delta', delta);

console.log('gamma & delta', gamma & delta);
console.log('gamma | delta', gamma | delta);
console.log('gamma ^ delta', gamma ^ delta);
console.log('gamma && delta', gamma && delta);
console.log('gamma || delta', gamma || delta);
