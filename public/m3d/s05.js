// Promise

// resolve /1
console.log("Promise via resolve");
Promise.resolve(42.42)
    .then(value => console.log("Result from promise via resolve is", value));

// resolve /2
console.log("Promise via resolve /2");

function multiply(a, b) {
    console.log(`multiplying ${a} by ${b} ...`)
    return a * b;
}

Promise.resolve(multiply(6, 7))
    .then(value => console.log("Result from promise via resolve /2 is", value));

// new /1
console.log("Promise via new");

new Promise(resolve => resolve(multiply(6, 3)))
    .then(value => console.log("Result from promise via new is", value));

// new /2
console.log("Promise via new /2");

function calc(operation, left, right) {
    return new Promise(resolve => resolve(operation(left, right)));
}

calc(multiply, 6, 8).then(
    value => console.log("Result from promise via new /2 is", value)
);