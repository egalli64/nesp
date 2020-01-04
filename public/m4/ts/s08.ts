class Person8 {
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

class Employee extends Person8 {
    salary: number;

    constructor(first: string, last: string, salary: number) {
        super(first, last);
        this.salary = salary;
    }

    fullInfo(): string {
        return super.fullInfo() + ': ' + this.salary;
    }
}

function logEmployee(first: string, last: string, salary: number): void {
    let emp = new Employee(first, last, salary);
    console.log(emp.fullInfo());
}