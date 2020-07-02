class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    fullInfo() {
        return this.first + ' ' + this.last;
    }
}

let first = 'Tom';
let last = 'Jones';

let p = new Person(first, last);
console.log(p.fullInfo());
