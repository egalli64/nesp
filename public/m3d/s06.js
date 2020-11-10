// Promise - failure

// reject
let a = Promise.reject();
console.log("Promise 'a' created");
a.then(() => { throw new Error("You won't get this"); })
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

function logResult(res) {
    console.log(`Result is ${res}`);
}

function logError(err) {
    console.log(`Failure: ${err}`);
}

console.log("calling calc, a promise resolved, 4 * 3");

calc(4, 3, multiply)
    .then(logResult)
    .catch(logError);

console.log("calling calc, promise rejected, 4 * 'hello'");

calc(4, 'hello', multiply)
    .then(logResult)
    .catch(logError);

console.log("calling calc, promise rejected, version 2");

calc(4, 'hello', multiply)
    .then(logResult, logError);
