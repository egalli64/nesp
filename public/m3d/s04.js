// Promise

// resolve /1
let a = Promise.resolve(42.42);
console.log("Promise 'a' resolved");
a.then(value => console.log("Result from promise 'a' is", value));

// resolve /2
function multiply(a, b) {
    console.log(`multiplying ${a} by ${b} ...`)
    return a * b;
}

let b = Promise.resolve(multiply(6, 7));
console.log("Promise 'b' resolved");
b.then(value => console.log("Result from promise 'b' is", value));

// new /1
let c = new Promise(resolve => { resolve(multiply(6, 3)); });
console.log("Promise 'c' created");
c.then(value => console.log("Result from promise 'c' is", value));

// new /2
function calc(operation, left, right) {
    return new Promise(resolve => {
        resolve(operation(left, right));
    });
}

calc(multiply, 6, 8).then(
    value => console.log("Result from promise returned by 'calc' is", value)
);