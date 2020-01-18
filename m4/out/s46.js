"use strict";
var tom = {
    first: 'Tom',
    last: 'Jones'
};
var bob = {
    first: 'Bob',
    last: 'Coe'
};
function sayHello(user, message) {
    console.log(user.first, user.last);
    console.log(message.sender, message.recipient, message.subject);
}
sayHello({ first: 'Bob', last: 'Hope' }, { sender: 'Tim', recipient: 'Rob', subject: 'Hello' });
//# sourceMappingURL=s46.js.map