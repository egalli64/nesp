// How to create a promise via resolve()

// resolve a value
console.log("Resolve a value");

let param = 42.42;

Promise.resolve(param)
    .then(res => console.log("resolved ->", res));

// resolve a function that leads to a value
console.log("Resolve a value /2");

function multiply(a, b) {
    console.log(`multiplying ${a} by ${b} ...`)
    return a * b;
}

Promise.resolve(multiply(6, 7))
    .then(value => console.log("resolved (function) ->", value));

console.log("A thenable object that resolves to a string")
let wouldResolve = {
    then: resolve => {
        resolve(42);
        console.log("After resolving wouldResolve.then() but before it crashes");
        throw new Error("Something went wrong - but after resolving");
        console.log("You should not see this message");
    }
};

Promise.resolve(wouldResolve)
    .then(res => console.log("wouldResolve ->", res))
    .catch(err => console.log("You should not see this message", err));

console.log("A thenable object that throws an Error")
let wouldFail = {
    then: resolve => {
        throw new Error("Something went wrong");
        console.log("You should not see this message");
        resolve("resolved");
    }
};

Promise.resolve(wouldFail)
    .then(() => console.log("You should not see this message"))
    .catch(err => console.log("wouldFail ->", err));
