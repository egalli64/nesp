"use strict";
var Person5 = /** @class */ (function () {
    function Person5(first, last) {
        this.first = first;
        this.last = last;
    }
    Person5.prototype.fullInfo = function () {
        return this.first + ' ' + this.last;
    };
    return Person5;
}());
function logPerson5(first, last) {
    var p = new Person5(first, last);
    console.log(p.fullInfo());
}
