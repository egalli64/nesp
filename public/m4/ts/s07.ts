class Person7 {
    first: string;
    last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    get fullName() {
        return `${this.first} ${this.last}`;
    }

    static merge(p1: Person7, p2: Person7) {
        return new Person7(p1.first + p2.first, p1.last + p2.last)
    }
}

function logPerson7(p1f: string, p1l: string, p2f: string, p2l: string): void {
    let p1: Person7 = new Person7(p1f, p1l);
    let p2: Person7 = new Person7(p2f, p2l);

    console.log(Person7.merge(p1, p2).fullName);
}