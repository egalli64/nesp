/**
 * derived class
 */

class PersonD {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    fullInfo() {
        return this.first + ' ' + this.last;
    }
}

class Employee extends PersonD {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }

    fullInfo() {
        return super.fullInfo() + ': ' + this.salary;
    }
}

function log39(first, last, salary) {
    let jon = new Employee(first, last, salary);
    console.log(jon.fullInfo());
}
