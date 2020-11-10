// Promise - failure

// reject
let a = Promise.reject();
console.log("Promise 'a' created");
a.then(() => console.log("No fulfill for promise 'a'"))
    .catch(() => console.log("Promise 'a' rejected"));

// failure
function multiply(a, b) {
    console.log(`multiplying ${a} by ${b} ...`);

    let result = a * b;
    if(isNaN(result)) {
        throw new Error("Expected numbers as input");
    }

    return result;
}

let b = Promise.resolve(multiply(6, 'hello'));
console.log("Promise 'b' resolved");
b.then(() => console.log("No fulfill for promise 'b'"))
    .catch(err => console.log("Promise 'b' rejected:", err));
