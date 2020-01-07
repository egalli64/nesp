"use strict";
function reverseCopy(data) {
    var result = [];
    for (var i = data.length - 1; i >= 0; i--) {
        result.push(data[i]);
    }
    return result;
}
function log11() {
    var x = [1, 2, 3];
    var xr = reverseCopy(x);
    console.log(x, xr);
    var y = ['a', 'b', 'c'];
    var yr = reverseCopy(y);
    console.log(y, yr);
}
