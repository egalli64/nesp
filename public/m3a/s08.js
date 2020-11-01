/**
 * Truthy and falsy
 */

if (!undefined) {
    console.log('undefined is falsy');
}
if (!null) {
    console.log('null is falsy');
}
if (!0) {
    console.log('0 is falsy');
}
if (!-0) {
    console.log('-0 is falsy');
}

// NaN
let mistake = Math.sqrt(-1);
console.log(`Square root of -1 is ${mistake}!`);

if(mistake != mistake) {
    console.log("NaN is strange, isn't it?");
}

if (!NaN) {
    console.log('NaN is falsy');
}
if (!'') {
    console.log('empty string is falsy');
}

if ([]) {
    console.log('empty array is truthy');
}
if ({}) {
    console.log('empty object is truthy');
}
if (function () { }) {
    console.log('empty function is truthy');
}

if("42" == 42) {
    console.log("?");
}
