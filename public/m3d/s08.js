// Promise reject()

console.log("(1) A rejected promise");
Promise.reject(new Error("Something bad happened"))
    .then(res => console.log("Not used in this example"))
    .catch(err => console.log("(1) Promise rejected ->", err.message));

//
function multiply(a, b) {
    console.log(`multiplying ${a} by ${b} ...`)
    return a * b;
}

function calc(a, b, op) {
    return new Promise((resolve, reject) => {
        if (typeof a != 'number' || typeof b != 'number') {
            reject(new Error(`can't ${op.name} ${a} and ${b}`));
        } else {
            resolve(op(a, b));
        }
    });
}

console.log("(2a) Fulfilling of a promise");

calc(4, 3, multiply)
    .then(res => console.log("(2a) Result is ->", res))
    .catch(err => console.log("Not used in this example"));

console.log("(2b) Rejection of a promise");

calc(4, 'hello', multiply)
    .then(res => console.log("Not used in this example"))
    .catch(err => console.log("(2b) Rejected ->", err.message));

console.log("(2c) Rejection of a promise, managed by then()");

calc(4, 'hello', multiply)
    .then(res => console.log("Not used in this example"),
        err => console.log("(2c) Rejected ->", err.message));
