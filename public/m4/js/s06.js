"use strict";
var Person6 = /** @class */ (function () {
    function Person6(first, last) {
        this.first = first;
        this.last = last;
    }
    Object.defineProperty(Person6.prototype, "fullName", {
        get: function () {
            return this.first + " " + this.last;
        },
        set: function (name) {
            var buffer = name.split(' ');
            this.first = buffer[0];
            this.last = buffer[1];
        },
        enumerable: true,
        configurable: true
    });
    return Person6;
}());
function logPerson6(first, last) {
    var p = new Person6(first, last);
    p.fullName = 'Bob Hope';
    console.log(p.fullName);
}
