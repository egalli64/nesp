function Person(first, last) {
    this.first = first;
    this.last = last;

    this.hello = () => 'Hello from ' + this.first;
}

function PersonEx(first, middle, last) {
    Person.call(this, first, last);
    this.middle = middle;

    this.helloEx = () => this.hello() + ' ' + this.middle;
}


let p = new Person('Tom', 'Jones');
console.log(p);
let q = new PersonEx('Quincy', 'H.', 'Jones');
console.log(q);

console.log('Tom', p.hello());
console.log('Quincy', q.helloEx());
