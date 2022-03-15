/**
 * Closure
 */

function makeMultiplier(factor) {
    return number => number * factor;
}

let tenfold = makeMultiplier(10);
let double = makeMultiplier(2);

let value = 42;
console.log(value, tenfold(value));
console.log(value, double(value));
