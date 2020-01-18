class Person45 {
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

class Employee extends Person45 {
    private salary: number;

    constructor(first: string, last: string, salary: number) {
        super(first, last);
        this.salary = salary;
    }

    fullInfo(): string {
        return super.fullInfo() + ': ' + this.salary;
    }
}

let jon = new Employee('Jon', 'Voight', 2000);
console.log(jon.fullInfo());