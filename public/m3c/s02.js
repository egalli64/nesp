/** function constructor for Persons */
function Person(first, last) {
    this.first = first;
    this.last = last;

    this.hello = function() {
        return 'Hello from ' + this.first;
    }
}

/** PersonEx inherits from Person */
function PersonEx(first, middle, last) {
    Person.call(this, first, last);
    this.middle = middle;

    this.helloEx = function() {
        return this.hello() + ' ' + this.middle;
    }
}

let p = new Person('Pete', 'Jones');
console.log(p);
let q = new PersonEx('Quincy', 'H.', 'Jones');
console.log(q);

console.log('hello Pete:', p.hello());
console.log('hello Quincy', q.hello());
console.log('extended hello Quincy:', q.helloEx());

function PersonEx2(first, middle, last) {
    Person.apply(this, [first, last]);
    this.middle = middle;

    this.helloEx = function() {
        return this.hello() + ' ' + this.middle;
    }
}

let z = new PersonEx2('Zoe', 'K.', 'Mart');
console.log(z);
