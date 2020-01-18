class Person {
    private first: string;
    private last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    fullInfo(): string {
        return this.first + ' ' + this.last;
    }
}

let john = new Person('John', 'Doe');
console.log(john.fullInfo());
