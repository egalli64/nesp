// Prototype

let empty = {};

console.log('Empty object has a proto:', empty.__proto__);
console.log(Object.getPrototypeOf(empty) == empty.__proto__);

console.log('Has empty object proto properties?', empty.__proto__.hasOwnProperty(), empty.hasOwnProperty());
console.log("Empty object's proto has no proto:", empty.__proto__.__proto__);

console.log('Empty object toString()', empty.toString(), empty.__proto__.toString());

// functions have their own prototype

function f() {
}

let f2 = () => { };

console.log("Functions have a specific prototype:", Object.getPrototypeOf(f) == Function.prototype);
console.log("Same prototype for arrow functions:", Object.getPrototypeOf(f2) == Function.prototype);

// arrays have their own prototype

let a = [];
console.log("Arrays have a specific prototype:", Object.getPrototypeOf(a) == Array.prototype);

// Constructing an object with a given prototype
let protoNamedObject = {
    hello() {
        console.log(`Hello from ${this.name}!`);
    }
};

function makeNamedObject(name) {
    let namedObject = Object.create(protoNamedObject);
    namedObject.name = name;
    return namedObject;
}

let aNamedObject = makeNamedObject("Bob");
aNamedObject.hello();

// Same, in a simpler way, using the "new" keyword
function NamedObject(name) {
    this.name = name;

    this.hello = () => {
        console.log(`Hello from ${this.name}!`);
    }
}

let bNamedObject = new NamedObject("Tom");
bNamedObject.hello();

// Same again, using "class"

class ClassyNamedObject {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`Hello from ${this.name}!`);
    }
}

let cNamedObject = new ClassyNamedObject("Ted");
cNamedObject.hello();
