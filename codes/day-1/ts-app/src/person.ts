class Person {
    //data members
    // id: number;
    // name: string;
    // salary: number;

    //constructor with arguments
    // constructor(id: number, name: string, salary: number) {
    //     this.id = id;
    //     this.name = name;
    //     this.salary = salary;
    // }
    constructor(public id: number, public name: string, public salary: number) {

    }

    show(): string {
        return `${this.name}, ${this.id}, ${this.salary}`
    }

}