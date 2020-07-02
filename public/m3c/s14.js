class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    fullInfo() {
        return this.first + ' ' + this.last;
    }
}

class Employee extends Person {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }

    fullInfo() {
        return super.fullInfo() + ': ' + this.salary;
    }
}

let jon = new Employee('Jon', 'Voight', 2000);
console.log(jon.fullInfo());
