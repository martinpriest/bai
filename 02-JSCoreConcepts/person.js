class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    toString() {
        return `${this.name} ${this.surname.toUpperCase()}`;
    }

    shortToString() {
        return `${this.name[0]}.${this.surname[0]}.`;
    }
}

console.log("------------------");
let jan = new Person("Jan", "Kowalski");
console.log(jan.toString());
console.log(jan.shortToString());
console.log("------------------");
let marcin = new Person("Marcin", "Kapłan");
console.log(marcin.toString());
console.log(marcin.shortToString());