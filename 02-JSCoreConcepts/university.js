names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter) {
        let resultArr = [];

        this.names.forEach(name => {
            if(name[0] == letter) resultArr.push(name);
        });

        return new Students(resultArr);
    }

    sort() {
        let resultArr = [];
        Object.assign(resultArr, this.names);
        resultArr.sort();
        return new Students(resultArr);
    }

    get() {
        return this.names;
    }

    getFirst(n) {
        let resultArr = [];
        for(let i=0; i<n; i++) resultArr.push(this.names[i]);
        return new Students(resultArr);
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());