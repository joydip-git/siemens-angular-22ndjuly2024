//2. constructor function syntax
function person(pId, pName, pSalary) {
    this.name = pName;
    this.id = pId;
    this.salary = pSalary;
    this.show = function () {
        return `
        Name: ${this.name}, 
        Id: ${this.id}, 
        Salary: ${this.salary}
        `
    }
}
const anilObject = new person(1, "anil", 10000)
const sunilObject = new person(2, "sunil", 20000)

console.log(anilObject.name);
console.log(anilObject["salary"]);
console.log(anilObject.show());

console.log(sunilObject.name);
console.log(sunilObject["salary"]);
console.log(sunilObject.show());