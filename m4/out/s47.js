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
var Guy = /** @class */ (function () {
    function Guy(name) {
        this.name = name;
    }
    Guy.prototype.getName = function () {
        return this.name;
    };
    return Guy;
}());
var items = [new Guy('tom'), new Shadow];
items.forEach(function (item) { return console.log(item.getName()); });
//# sourceMappingURL=s47.js.map