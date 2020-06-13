let data = [1, 'hello', [true, 42.24]];

console.log('data', data);
console.log('length', data.length);
console.log('last item', data[data.length - 1]);
console.log('item 1 of last item', data[data.length - 1][1]);

data[2] = false;
console.log('data[2]', data[2]);
console.log('data', data);

console.log('Loop on all items');
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

console.log('joined', data.join());
console.log('to string', data.toString());

console.log('pop', data.pop());
console.log('shift', data.shift());
console.log('data', data);

data.push('push1');
data.push('push2');
data.unshift('unshift');
console.log('after two pushes and one unshift', data);

data.splice(1, 2);
console.log('splice from 1 of 2 items', data);