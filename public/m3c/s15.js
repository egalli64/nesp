/**
 * Closure
 */

function makeMultiplier(factor) {
    return number => number * factor;
}

let tenfold = makeMultiplier(10);

let value = 42;
console.log(42, tenfold(42));