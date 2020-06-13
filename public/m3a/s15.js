function f() {
    console.log('hello from f()');
}

console.log('calling function f()');
f();

let x = function () {
    console.log('hello from an anonymous function');
}

console.log('calling the anonymous function stored in x');
x();

function g(a, b) {
    return a + b;
}

console.log('passing numbers to function g() ...', g(2, 3));

console.log('passing strings to function g() ...', g('Hello', 'World'));


let adder = (a, b) => a + b;

console.log('passing numbers to the anonymous function stored in adder ...', adder(2, 3));
console.log('passing strings to the anonymous function stored in adder ...', adder('Hello', 'World'));
