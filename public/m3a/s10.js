let value = 'Solution' + 42;
console.log('Concatenating string with a number lead to a new string', value, 'Solution' + 42 === 'Solution42');


let a = 42;
console.log('Explicit conversion number to string', a, a.toString() === '42');

check = Number('42') === 42;
console.log('Explicit conversion string to number', Number('42') === 42);
