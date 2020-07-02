let data = new Array(5);
console.log('data', data);

data.fill(0);
console.log('data filled', data);

let splits = Array.from('hello');
console.log('string split', splits);

let slices = splits.slice(2, 4);
console.log('a slice of splits', slices);

splits.sort();
console.log('sorted split', splits);

splits.sort(
    (left, right) => left == right ? 0 :
        left < right ? 1 : -1);
console.log('sorted desc split', splits);

splits.reverse();
console.log('reversed split', splits);

splits.forEach((x, i) => console.log(i, x));

if(slices.every(s => s == 'l')) {
    console.log("every item in slices is a lowercase l");
}

let filters = splits.filter(s => s > 'h');
console.log('split more than h', filters);

let uppers = splits.map(s => s.toUpperCase());
console.log('split to uppercase', uppers);
