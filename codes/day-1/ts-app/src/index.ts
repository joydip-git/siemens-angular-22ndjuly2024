//var numValue: number = 100;
let numValue = 100;
//type inference (evaluating the data type from assigned value)

//can't assign different type of value
//numValue = "joydip";

function add(a: number, b: number): number {
    return (a + b)
}

const addRes = add(12, 13)
console.log(addRes);

for (let i = 0; i < 1; i++) {
    let numValue = 100
    console.log(numValue);
}

// class Person {
//     private _id: number;
//     public get id(): number {
//         return this._id;
//     }
//     public set id(value: number) {
//         this._id = value;
//     }
//     private _name: string;
//     public get name(): string {
//         return this._name;
//     }
//     public set name(value: string) {
//         this._name = value;
//     }
//     private _salary: number;
//     public get salary(): number {
//         return this._salary;
//     }
//     public set salary(value: number) {
//         this._salary = value;
//     }

//     constructor(id: number, name: string, salary: number) {
//         this._id = id;
//         this._name = name;
//         this._salary = salary;
//     }

// }