function hello(): void {
    console.log('hello export');
}

function local(): void {
    console.log('hello local');
}

function bye(): void {
    console.log('bye');
}

export { hello, bye as goodbye }