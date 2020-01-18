let i: number = 42;

function hello(name: string) : string {
    return `hello ${name}!`;
}

console.log(`number is ${i}`, hello('Tom'));

// ...

let values: number[] = [42, 12];

console.log(values, values[0], values[1]);

// ...

let couple: [string, number] = ['hi', 42];

console.log(couple, couple[0], couple[1]);

// ..

enum Role { Model, View, Controller };

let role: Role = Role.View;

console.log(role, Role.Model, Role.Controller);
