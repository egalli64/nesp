// timers

function sayHello(name) {
    console.log(Date.now() + `, hello ${name}!`);
}

console.log(Date.now() + ", starting");

console.log("Saying hello to Bob and Bill, both in a second");
setTimeout(sayHello, 1000, "Bob");
let id = setTimeout(sayHello, 1000, "Bill");

console.log("And to Tom every two seconds");
let id2 = setInterval(sayHello, 2000, "Tom");
console.log("Stopping to say hello to Tom in five seconds");
setTimeout(clearInterval, 5000, id2);

console.log("Changed my mind, say nothing to Bill");
clearTimeout(id);
