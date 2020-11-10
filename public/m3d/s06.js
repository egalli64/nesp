// Promise - failure

// reject
let a = Promise.reject();
console.log("Promise 'a' created");
a.then(() => console.log("No fulfill for promise 'a'"))
    .catch(() => console.log("Promise 'a' rejected"));

// failure
function multiply(a, b) {
    console.log(`multiplying ${a} by ${b} ...`)
    return a * b;
}

function calc(a, b, op) {
    return new Promise((resolve, reject) => {
        if (typeof a != 'number' || typeof b != 'number') {
            reject(`can't ${op.name} ${a} and ${b}`);
        } else {
            let result = op(a, b);
            resolve(result);
        }
    });
}

console.log("A promise resolved, 4 * 3");

calc(4, 3, multiply)
    .then(res => console.log("Result is", res))
    .catch(err => console.log("Error is", err));


console.log("A promise rejected, 4 * 'hello'");

calc(4, 'hello', multiply)
    .then(res => console.log("Result is", res))
    .catch(err => console.log("Error:", err));
