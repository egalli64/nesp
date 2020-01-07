"use strict";
var Shadow = /** @class */ (function () {
    function Shadow() {
    }
    Shadow.prototype.getName = function () {
        return this.name;
    };
    Object.defineProperty(Shadow.prototype, "name", {
        get: function () {
            return 'Unnamed shadow';
        },
        enumerable: true,
        configurable: true
    });
    return Shadow;
}());
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
function log10(name) {
    var items = [new Person(name), new Shadow];
    items.forEach(function (item) { return console.log(item.getName()); });
}
