function reverseCopy<T>(data: T[]): T[] {
    let result = [];
    for (let i = data.length - 1; i >= 0; i--) {
        result.push(data[i]);
    }
    return result;
}

function log11() {
    let x = [1, 2, 3];
    let xr = reverseCopy(x);

    console.log(x, xr);

    let y = ['a', 'b', 'c'];
    let yr = reverseCopy(y);

    console.log(y, yr);
}