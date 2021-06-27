// async / await

/** A slow function that could throw an exception */
async function sayHello(id, name) {
    // sleep one second, just to make the example more clear
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (name == "Tom") {
        throw new Error(`I won't say hello to ${name}!`);
    }
    console.log(`(${id}) hello ${name}!`);
}

console.log("1a: A fulfilled risky slow async call");
sayHello("1a", "Bob").then(() => console.log("1a done")).catch(() => "This won't happen");

console.log("1b: A rejected risky slow async call");
sayHello("1b", "Tom").then(() => console.log("This won't happen")).catch(err => console.log("1b done: " + err.message));

console.log("end of script");
