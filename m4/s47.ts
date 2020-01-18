interface Named {
    getName(): string;
}

class Shadow implements Named {
    getName(): string {
        return this.name;
    }

    private get name() {
        return 'Unnamed shadow';
    }
}

class Guy implements Named {
    name: string;

    constructor(name: string) { this.name = name; }

    getName(): string {
        return this.name;
    }
}

let items: Named[] = [new Guy('tom'), new Shadow];
items.forEach((item) => console.log(item.getName()));