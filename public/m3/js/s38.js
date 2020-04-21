/**
 * static method
 */

class PersonC {
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
        return new PersonC(p1.first + p2.first, p1.last + p2.last)
    }
}

function log38(f1, l1, f2, l2) {
    let tom = new PersonC(f1, l1);
    let bob = new PersonC(f2, l2);

    console.log(PersonC.merge(tom, bob).fullName);
}
