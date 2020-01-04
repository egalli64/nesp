class Person6 {
    first: string;
    last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    get fullName() {
        return `${this.first} ${this.last}`;
    }

    set fullName(name: string) {
        let buffer = name.split(' ');
        this.first = buffer[0];
        this.last = buffer[1];
    }
}

function logPerson6(first: string, last: string): void {
    let p: Person6 = new Person6(first, last);

    p.fullName = 'Bob Hope';
    console.log(p.fullName);
}