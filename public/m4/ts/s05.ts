class Person5 {
    first: string;
    last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    fullInfo(): string {
        return this.first + ' ' + this.last;
    }
}

function logPerson5(first: string, last: string): void {
    let p: Person5 = new Person5(first, last);

    console.log(p.fullInfo());
}