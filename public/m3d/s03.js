/**
 * callback
 */

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculator(a, b, op) {
    console.log(`Input was ${a} and ${b}, result is ${op(a, b)}`);
}

calculator(6, 7, add);
calculator(6, 7, multiply);

// split callbacks - success vs failure

function splitCalc(a, b, op, success, failure) {
    let result = op(a, b);

    if(isNaN(result)) {
        failure(result);
    } else {
        success(result);
    }
}

function printResult(res) {
    console.log(`Result is ${res}`);
}

function printError(err) {
    console.log(`Failure: ${err}!`);
}

splitCalc(6, 7, multiply, printResult, printError);
splitCalc(6, 'hello', multiply, printResult, printError);
