let person = {
    first: 'Tom',
    last: 'Slick'
};

console.log('An object', person);



function Person(first, last) {
    this.first = first;
    this.last = last;

    this.hello = () => 'Hello from ' + this.first;
}

let p1 = new Person('Bob', 'Slowe');
let p2 = new Person('Tim', 'Hare');

console.log(p1);
console.log(p2.hello());


delete p1.last;
console.log('deleted last', p1);
p2.middle = 'H.';
console.log('added middle', p2);
