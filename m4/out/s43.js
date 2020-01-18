"use strict";
var i = 42;
function hello(name) {
    return "hello " + name + "!";
}
console.log("number is " + i, hello('Tom'));
// ...
var values = [42, 12];
console.log(values, values[0], values[1]);
// ...
var couple = ['hi', 42];
console.log(couple, couple[0], couple[1]);
// ..
var Role;
(function (Role) {
    Role[Role["Model"] = 0] = "Model";
    Role[Role["View"] = 1] = "View";
    Role[Role["Controller"] = 2] = "Controller";
})(Role || (Role = {}));
;
var role = Role.View;
console.log(role, Role.Model, Role.Controller);
//# sourceMappingURL=s43.js.map