"use strict";
var Person7 = /** @class */ (function () {
    function Person7(first, last) {
        this.first = first;
        this.last = last;
    }
    Object.defineProperty(Person7.prototype, "fullName", {
        get: function () {
            return this.first + " " + this.last;
        },
        enumerable: true,
        configurable: true
    });
    Person7.merge = function (p1, p2) {
        return new Person7(p1.first + p2.first, p1.last + p2.last);
    };
    return Person7;
}());
function logPerson7(p1f, p1l, p2f, p2l) {
    var p1 = new Person7(p1f, p1l);
    var p2 = new Person7(p2f, p2l);
    console.log(Person7.merge(p1, p2).fullName);
}
