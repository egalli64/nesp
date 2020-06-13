let props = { a: 1, b: 2, c: 3 };
for (let prop in props) {
    console.log(`${prop} is ${props[prop]}`);
}

let ys = [1, 2, 3, 4, 5, 6];
for (let y of ys) {
    console.log(`> ${y}`);
}

ys.forEach((y) => {
    console.log(`>> ${y}`);
});
