// string
let name = 'Bob';
console.log(name, typeof name);

// number
let value = 42;
console.log(value, typeof value);

// boolean
let flag = true;
console.log(flag, typeof flag);

// object
let dog = {
    name: 'Zip',
    breed: 'Alsatian'
};

console.log(dog, typeof dog);
console.log(dog.name + ' breed is ' + dog.breed);
console.log(dog['name'] + 'breed is ' + dog['breed']);

// array is kind of object
let data = [1, 'Tom', false];
console.log(data, typeof data);

// const number
const z = 42;
console.log(z + ' is a constant (' + typeof z + ')');

let x;
let y = null;
console.log(x, typeof x);
console.log(y, typeof y);

// type change
dog = 12;
console.log('dog new life', dog, typeof dog);
