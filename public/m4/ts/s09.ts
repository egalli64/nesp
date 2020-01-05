interface Person9 {
    first: string;
    last: string;
}

interface Message {
    recipient?: string,
    subject?: string,
    body: string
}

function log9(first: string, last: string, message: string) {
    let bob: {
        first: string;
        last: string;
    } = {
        first: 'Bob',
        last: 'Coe'
    };

    let p: Person9 = {
        first: first,
        last: last
    };

    sayHello(p, { recipient: bob.first, body: message });
}

function sayHello(sender: Person9, message: Message) {
    console.log(`Sender: ${sender.first} ${sender.last}`);
    console.log(`Recipient: ${message.recipient}`);
    console.log(`Subject: ${message.subject}`);
    console.log(`Message: ${message.body}`);
}