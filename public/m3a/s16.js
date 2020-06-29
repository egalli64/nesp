let person = {
    first: 'Tom',
    last: 'Slick',
    hello: () => 'Hello from ' + this.first
};

console.log('An object ...', person);
console.log('First name is', person.first);
console.log('Last name is', person['last']);

delete person.last;
console.log('deleted last', person);
person.middle = 'H.';
console.log('added middle', person);

person.quack = function() {
    return "quack!";
}

console.log('added quack() method', person);
console.log('calling quack() on person', person.quack());

function Person(first, last) {
    this.first = first;
    this.last = last;

    this.hello = function() {
        return 'Hello from ' + this.first;
    }
}

let p1 = new Person('Bob', 'Slowe');
let p2 = new Person('Tim', 'Hare');

console.log('A person ...', p1);
console.log(p2.hello());
