class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    get fullName() {
        return this.first + ' ' + this.last;
    }

    set fullName(name) {
        let buffer = name.split(' ');
        this.first = buffer[0];
        this.last = buffer[1];
    }

    static merge(p1, p2) {
        return new Person(p1.first + p2.first, p1.last + p2.last)
    }
}

let tom = new Person('Tom', 'Jones');
console.log(tom.fullName);

let bob = new Person('Bob', 'Hope');
console.log(bob.fullName);

console.log(Person.merge(tom, bob).fullName);
