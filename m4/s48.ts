function reverseCopy<T>(data: T[ ]): T[ ] {
    let result = [ ];
    for (let i = data.length - 1; i >= 0; i--) {
        result.push(data[i]);
    }
    return result;
}

let nbrs: number[] = [3, 5, 7, 12];
console.log('original', nbrs);
nbrs.reverse()
console.log('reversed', nbrs);

console.log('reversed copy of reversed', reverseCopy(nbrs));
console.log('reversed original unchanged', nbrs);
