interface Named {
    getName(): string;
}

class Shadow implements Named {
    getName(): string {
        return this.name;
    }

    get name() {
        return 'Unnamed shadow';
    }
}

class Person implements Named {
    name: string;

    constructor(name: string) { this.name = name; }

    getName(): string {
        return this.name;
    }
}

function log10(name: string) {
    let items: Named[] = [new Person(name), new Shadow];
    items.forEach((item) => console.log(item.getName()));
}