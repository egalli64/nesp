let data = [1, 2, 3, 4, 5];
console.log('data', data);

let [first, second] = data;
console.log('first', first);
console.log('second', second);

let [a, , c, ...va] = data;
console.log('a', a);
console.log('c', c);
console.log('va', va);
