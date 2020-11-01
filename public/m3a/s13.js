/**
 * Function
 */

function f() {
    console.log('function f(), no input parameters and no return value');
}

function g(a, b) {
    console.log(`function g(), two input parameters, ${a} and ${b}, and a return value`);
    return a + b;
}

f();

let result = g(3, 5);
console.log(`g(3, 5) returns ${result}`);

let fa = function () {
    console.log('an anonymous function');
}

console.log('calling the function stored in variable fa');
fa();

let ga = function(a, b) {
    return a + b;
}

console.log('passing numbers to the anonymous function stored in ga ...', ga(2, 3));
console.log('passing strings to the anonymous function stored in ga ...', ga('Hello', 'World'));

console.log("adding a number to undefined ...", ga(42));
console.log('extra parameters ignored ...', ga(2, 3, 4));
