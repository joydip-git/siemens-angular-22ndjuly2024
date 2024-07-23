class Person {
    /*
    id: number;
    name: string;
    salary: number;
    location?: string;

    constructor(id: number, name: string, salary: number, location: string = 'Banglore') {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.location = location;
    }
    */
    constructor(private id: number, public name: string, public salary: number, public location: string = 'Banglore') {

    }
    print(): string {
        return `
        Name: ${this.name},
        Id: ${this.id},
        Salary: ${this.salary},
        Location: ${this.location}
        `
    }
}

const anilPerson = new Person(1, "anil", 1000);
//console.log(anilPerson.id);
console.log(anilPerson.print());

interface Operations {
    add(a: number, b: number): number;
}
class Implementation implements Operations {
    add(a: number, b: number): number {
        return a + b
    }
}

interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    //print(): string;
}

const p: Product = {
    id: 1,
    name: 'dell xps',
    price: 10000,
    description: 'new laptop from dell',
    // print: function () {
    //     return this.name
    // }
}

console.log(p["name"]);

interface Generic {
    [key: string]: any;
}

const g: Generic = {
    data: {
        id: 1,
        name: 'joydip'
    },
}

// interface Some {
//     (): void;
// }

// class SomeImpl implements Some {
//     m(): void {
//         console.log('hello');
//     }
// }

type myDataType = number | undefined | null;

function show(data: myDataType): myDataType {
    return data ? data : undefined
}

type myType = {
    id: number,
    name: string
}

const anil: myType = {
    id: 1,
    name: 'anil'
}


function multiply(a: number, b: number, c: number) {
    return a * b * c
}
type fnRefType = (x: number, y: number) => number
type fnType = (fnRef: fnRefType, ...args: any[]) => void

type masterType = fnRefType & fnType

interface Some {
    (): void;
}

const add: fnRefType = (a: number, b: number) => {
    return a + b
}
const invoke: fnType = (refToFunc: fnRefType, ...args: number[]) => {
    console.log(refToFunc(args[0], args[1]))
}
invoke(add, 12, 13);


const showValue: Some = () => console.log('hello');

// function invoke(fnRef: fnRefType, ...args: number[]) {
//     console.log(fnRef(args[0], args[1]))
// }

type OperationsType = {
    add(a: number, b: number): number,
    subtract(a: number, b: number): number
}

class Impl implements OperationsType {
    add(a: number, b: number): number {
        throw new Error("Method not implemented.");
    }
    subtract(a: number, b: number): number {
        throw new Error("Method not implemented.");
    }
}
enum Color {
    black = 100,
    blue = 200,
    green = 300
}

let colorValue = Color.blue

//generic interface
interface CalcOpertaions<TInput extends any, TResult extends any> {
    add(a: TInput, b: TInput): TResult | undefined;
}
//generic (abstarct) class
abstract class CalcOps<TInput, TResult> implements CalcOpertaions<TInput, TResult> {
    // add(a: TInput, b: TInput): TResult | undefined {
    //     return undefined
    // }
    abstract add(a: TInput, b: TInput): TResult | undefined;
}
class CalcImpl extends CalcOps<number, number> {
    add(a: number, b: number): number | undefined {
        throw new Error("Method not implemented.");
    }
}

//generic method
function addValues<T, TResult>(a: T, b: T): TResult | undefined {
    return undefined
}





