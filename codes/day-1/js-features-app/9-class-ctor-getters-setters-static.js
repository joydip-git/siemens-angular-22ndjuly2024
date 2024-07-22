//3. class, constructor keywords and getter and setter and separate data member declaration
class Person {
    #_id;
    #_name;
    #_salary;
    static className = "Person";

    constructor(pId, pName, pSalary) {
        this.#_id = pId;
        this.#_name = pName;
        this.#_salary = pSalary;

    }
    get id() {
        return this.#_id
    }
    set id(pId) {
        this.#_id = pId
    }
    get name() {
        return this.#_name
    }
    set name(pName) {
        this.#_name = pName
    }
    get salary() {
        return this.#_salary
    }
    set salary(pSalary) {
        this.#_salary = pSalary
    }
    show() {
        return `
        Name: ${this.#_name}, 
        Id: ${this.#_id}, 
        Salary: ${this.#_salary}
        `
    }
    //static member can't access non-static members
    static print() {
        // return `
        // Name: ${this.name}, 
        // Id: ${this.id}, 
        // Salary: ${this.salary}
        // `
        return this.className
    }
}
const anilObject = new Person(1, "anil", 10000)
const sunilObject = new Person(2, "sunil", 20000)

console.log(anilObject.name);
console.log(anilObject["salary"]);
console.log(anilObject.show());

console.log(sunilObject.name);
console.log(sunilObject["salary"]);
console.log(sunilObject.show());

console.log(Person.print());