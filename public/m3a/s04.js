/**
 * Variables
 */

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
console.log(dog['name'] + ' breed is ' + dog['breed']);

// array is kind of an object
let data = [1, 'Tom', false];
console.log(data, typeof data);

// const number
const z = 42;

// uncomment next line to get TypeError: Assignment to constant variable
// z += 1;

console.log(z + ' is a constant (' + typeof z + ')');

console.log('functions are kind of objects, but their typeof is ...', typeof console.log);

let x;
let y = null;
console.log(x, 'has typeof ...', typeof x);
console.log(y, 'has typeof ...', typeof y);

// type change
dog = 12;
console.log('dog new life:', dog, typeof dog);
