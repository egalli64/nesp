"use strict";
function log9(first, last, message) {
    var bob = {
        first: 'Bob',
        last: 'Coe'
    };
    var p = {
        first: first,
        last: last
    };
    sayHello(p, { recipient: bob.first, body: message });
}
function sayHello(sender, message) {
    console.log("Sender: " + sender.first + " " + sender.last);
    console.log("Recipient: " + message.recipient);
    console.log("Subject: " + message.subject);
    console.log("Message: " + message.body);
}
