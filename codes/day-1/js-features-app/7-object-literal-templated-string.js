//1. object-literal syntax
const anilObject = {
    name: 'anil',
    id: 1,
    salary: 10000,
    show: function () {
        return `
        Name: ${this.name}, 
        Id: ${this.id}, 
        Salary: ${this.salary}
        `
        // return "Name: " + this.name
        //     + "Id: " + this.id
        //     + "Salary: " + this.salary
    }
}
console.log(anilObject.name);
console.log(anilObject["salary"]);
console.log(anilObject.show());