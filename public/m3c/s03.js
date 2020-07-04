// arguments
function f1() {
    let result = 0;
    for(let i = 0; i < arguments.length; i++) {
        console.log('processing', arguments[i]);
        result += arguments[i];
    }

    return result;
}
console.log('f1 result is', f1(5, 8, 7));

// arrow notation
let f2 = () => 'hello from f2';
console.log('calling f2 ...', f2());

// arrow notation /2
let f3 = () => {
    console.log('hello from f3');
    return 'done';
}
console.log('calling f3 ...', f3());

// no "this" in lambda
let f4 = () => {
    console.log('lambda "this"', this);
}
f4();

// default parameter
let f5 = (x = 0) => {
    console.log('x is ...', x);
}
f5();
f5(42);

// rest parameter
function f6(... va) {
    let result = 0;
    for(let i = 0; i < va.length; i++) {
        console.log('processing', va[i]);
        result += va[i];
    }

    return result;
}
console.log('f6 result is', f1(5, 8, 7));
