// callback hell

function add(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

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

// (7 * 5 + 1) / 3
calc(7, 5, mult,
    res => calc(res, 1, add,
        res => calc(res, 3, div, logResult, logError),
        logError),
    logError);

// (7 * 'hello' + 1) / 3
calc(7, 'hello', mult, res =>
    calc(res, 1, add,
        res => calc(res, 3, div, logResult, logError),
        logError),
    logError);

// (7 * 5 + 1) / 'hello'
calc(7, 5, mult, res =>
    calc(res, 1, add,
        res => calc(res, 'hello', div, logResult, logError),
        logError),
    logError);
