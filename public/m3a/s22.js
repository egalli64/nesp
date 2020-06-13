let data = new Array(5);
console.log('data', data);


data.fill(0);
console.log('data filled', data);

data = Array.from('hello');
console.log('from hello to data', data);
