// callback

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculator(a, b, op) {
    console.log(`Calling ${op.name} on ${a} and ${b}, result is ${op(a, b)}`);
}

calculator(6, 7, add);
calculator(6, 7, multiply);

// split callbacks - success vs failure

function calc(a, b, op, success, failure) {
    if (typeof a != 'number' || typeof b != 'number') {
        failure(`can't ${op.name} ${a} and ${b}`);
    } else {
        let result = op(a, b);
        success(result);
    }
}

function logResult(res) {
    console.log(`Result is ${res}`);
}

function logError(err) {
    console.log(`Failure: ${err}`);
}

calc(6, 7, multiply, logResult, logError);
calc(6, 'hello', multiply, logResult, logError);
