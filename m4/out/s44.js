"use strict";
var Person = /** @class */ (function () {
    function Person(first, last) {
        this.first = first;
        this.last = last;
    }
    Person.prototype.fullInfo = function () {
        return this.first + ' ' + this.last;
    };
    return Person;
}());
var john = new Person('John', 'Doe');
console.log(john.fullInfo());
//# sourceMappingURL=s44.js.map