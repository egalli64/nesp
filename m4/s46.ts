interface User {
    first: string;
    last: string;
}

let tom: User = {
    first: 'Tom',
    last: 'Jones'
};

interface Message {
    sender: string,
    recipient: string,
    subject: string,
    message?: string
}

let bob: {
    first: string;
    last: string;
} = {
    first: 'Bob',
    last: 'Coe'
};

function sayHello(user: User, message: Message) {
    console.log(user.first, user.last);
    console.log(message.sender, message.recipient, message.subject);
}

sayHello({first: 'Bob', last: 'Hope'}, {sender: 'Tim', recipient: 'Rob', subject: 'Hello'});