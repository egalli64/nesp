let f1 = () => 'hello from f1';
console.log('calling f1 ...', f1());

let f2 = () => {
    console.log('hello from f2');
    return 'done';
}
f2();

let f3a = () => {
    console.log('lambda "this"', this);
}

function f3b() {
    console.log('plain function "this"', this);
}

f3a();
f3b();

/*
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
*/