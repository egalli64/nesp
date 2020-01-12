/**
 * s36.js
 */

class PersonA {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    fullInfo() {
        return this.first + ' ' + this.last;
    }
}

function log36(first, last) {
    let p = new PersonA(first, last);

    console.log(p.fullInfo());
}
