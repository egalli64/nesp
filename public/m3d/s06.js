// How to create a promise via resolve()

console.log("(1) Resolve a value");

let param = 42.42;

Promise.resolve(param)
    .then(res => console.log("(1) value resolved ->", res));

console.log("(2) Resolve a function returning a value");

function multiply(a, b) {
    console.log(`Multiplying ${a} by ${b}`);
    if (typeof a != 'number' || typeof b != 'number') {
        // synchronous exception
        throw new Error("Only numbers are accepted");
    }
    return a * b;
}

try {
    Promise.resolve(multiply(6, 'hello'))
        .then(value => console.log("Not used in this example"))
        .catch(err => console.log("Not used in this example"));
} catch (err) {
    console.log("(2a) If function throws, exception is managed synchronously ->", err.message);
}

Promise.resolve(multiply(6, 7))
    .then(value => console.log("(2b) Function resolved ->", value));

console.log("(3) A fulfilled thenable")
let goodThenable = {
    then: resolve => {
        resolve(multiply(3, 7));
        console.log("(3) After resolving then() but before it crashes");
        throw new Error("After resolving something goes wrong");
        console.log("Unreacheable code");
    }
};

Promise.resolve(goodThenable)
    .then(res => console.log("(3) Thenable fulfilled ->", res))
    .catch(err => console.log("Not used in this example"));

console.log("(4) A rejected thenable")
let badThenable = {
    then: resolve => {
        resolve(multiply(3, 'hello'));
        console.log("Not used in this example");
    }
};

Promise.resolve(badThenable)
    .then(() => console.log("Not used in this example"))
    .catch(err => console.log("(4) Thenable rejected ->", err.message));
