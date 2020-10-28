/**
 * String /2
 */

let s = 'Tom,Bob,Sally';
console.log(s);
console.log('length', s.length);
console.log('first char', s[0], s.charAt(0));
console.log('last char', s[s.length - 1]);

let idx = s.indexOf('Bob');
console.log("index of Bob", idx);
console.log("index of Bill", s.indexOf('Bill'));
console.log("Tom is at the beginning?", s.startsWith('Tom'));
console.log("Sally is at the end?", s.endsWith('Sally'));
console.log("Bob is in?", s.includes('Bob'));

let end = s.indexOf(',', idx);
console.log("next comma position", end);
console.log('slice [' + idx + '..' + end + ')', s.slice(idx, end));

console.log('lower', s.toLowerCase());
console.log('upper', s.toUpperCase());

console.log('Bill instead of Bob: ' + s.replace('Bob', 'Bill'));

let array = s.split(',');
console.log('array', array);
console.log('First', array[0]);
console.log('Last', array[array.length-1]);