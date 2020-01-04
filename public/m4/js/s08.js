"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person8 = /** @class */ (function () {
    function Person8(first, last) {
        this.first = first;
        this.last = last;
    }
    Person8.prototype.fullInfo = function () {
        return this.first + ' ' + this.last;
    };
    return Person8;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(first, last, salary) {
        var _this = _super.call(this, first, last) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.fullInfo = function () {
        return _super.prototype.fullInfo.call(this) + ': ' + this.salary;
    };
    return Employee;
}(Person8));
function logEmployee(first, last, salary) {
    var emp = new Employee(first, last, salary);
    console.log(emp.fullInfo());
}
