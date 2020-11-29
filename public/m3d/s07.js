// new Promise

// A function that throws an exception 
function sayHello(id, name) {
    if (name == "Tom") {
        throw new Error(`I won't say hello to ${name}`);
    }
    console.log(`(${id}) hello ${name}!`);
}

// console.log("(0) This would lead to a crash in a second");
// setTimeout(sayHello, 1000, "Tom");

//
console.log("(1a) A fulfilled risky delayed call in a Promise");
let delay = ms => new Promise(resolve => setTimeout(resolve, ms));

delay(1000)
    .then(() => sayHello("1a", "Bob"))
    .catch(err => console.log("Not used in this example"));

//
console.log("(1b) A delayed call rejected in a Promise for an exception");
delay(1000)
    .then(() => sayHello("1b", "Tom"))
    .catch(err => console.log("(1b) Exception caught ->", err.message));

// A plain JS function
function multiply(a, b) {
    console.log(`multiplying ${a} by ${b} ...`)
    return a * b;
}

// This version of multiply could throw an exception 
function multiplyEx(a, b) {
    console.log(`Multiplying ${a} by ${b}`);
    if (typeof a != 'number' || typeof b != 'number') {
        throw new Error("Only numbers are accepted");
    }
    return a * b;
}

//
console.log("(2a) Good call")
new Promise(resolve => resolve(multiplyEx(4, 5)))
    .then(value => console.log("(2a) Result is", value))
    .catch(err => console.log("Not used in this example"));

//
console.log("(2b) Bad call")
new Promise(resolve => resolve(multiplyEx("Tom", 5)))
    .then(value => console.log("Not used in this example"))
    .catch(err => console.log("(2b) rejected ->", err.message));

/**
 * Check the parameters to ensure calling a function properly
 */
function calc(a, b, op) {
    return new Promise((resolve, reject) => {
        if (typeof a != 'number' || typeof b != 'number') {
            reject(new Error(`can't ${op.name} ${a} and ${b}`));
        } else {
            resolve(op(a, b));
        }
    });
}

//
console.log("(3a) Fulfilling of a promise");

calc(4, 3, multiply)
    .then(res => console.log("(3a) Result is ->", res))
    .catch(err => console.log("Not used in this example"));

console.log("(3b) Rejection of a promise");

calc(4, 'hello', multiply)
    .then(res => console.log("Not used in this example"))
    .catch(err => console.log("(3b) Rejected ->", err.message));

console.log("(3c) Rejection of a promise, managed by then()");

calc(4, 'hello', multiply)
    .then(res => console.log("Not used in this example"),
        err => console.log("(2c) Rejected ->", err.message));
