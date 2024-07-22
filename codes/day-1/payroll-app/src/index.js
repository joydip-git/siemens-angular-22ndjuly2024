//models
class Employee {
    constructor(id, name, basic, da, hra) {
        this.name = name;
        this.id = id;
        this.basciPayment = basic;
        this.daPayment = da;
        this.hraPayment = hra;
        this.totalSalary = 0
    }
    calculateSalary() {
        this.totalSalary = this.basciPayment + this.daPayment + this.hraPayment
    }
}

class Developer extends Employee {
    constructor(id, name, basic, da, hra, incentive) {
        super(id, name, basic, da, hra)
        this.incenctivePayment = incentive;
    }
    calculateSalary() {
        super.calculateSalary();
        this.totalSalary += this.incenctivePayment
    }
}

class Hr extends Employee {
    constructor(id, name, basic, da, hra, gratuity) {
        super(id, name, basic, da, hra)
        this.gratuityPayment = gratuity;
    }
    calculateSalary() {
        super.calculateSalary();
        this.totalSalary += this.gratuityPayment
    }
}

//repository
const employees = []

//business logic
function sortEmployees(choice) {
    switch (choice) {
        case 1:
            employees.sort((e1, e2) => e1.id - e2.id);
            break;

        case 2:
            employees.sort((e1, e2) =>
                e1.name
                    .toLocaleLowerCase()
                    .localeCompare(
                        e2.name.toLocaleLowerCase()
                    )
            );
            break;

        case 3:
            employees.sort((e1, e2) => e1.totalSalary - e2.totalSalary);
            break;

        default:
            alert('enter proper choice')
            employees.sort((e1, e2) => e1.id - e2.id);
            break;
    }

    employees.forEach(e => console.log(`${e.id}:${e.name}=>${e.totalSalary}`))
}

function calculateSalaryOfEmployees() {
    employees.forEach(e => e.calculateSalary());
}

function printSalaryOfEmployees() {
    employees.forEach(e => console.log(`${e.name} got salary of ${e.totalSalary}`))
}

function filterEmployees(criteriaSalary) {
    return employees.filter(e => e.totalSalary > criteriaSalary)
}

//front-end
const anilDev = new Developer(3, "anil", 10000, 20000, 30000, 40000);
const sunilDev = new Developer(1, "sunil", 12000, 22000, 32000, 42000);
const maheshHr = new Hr(4, "mahesh", 15000, 25000, 35000, 45000);
const sureshHr = new Hr(2, "suresh", 20000, 30000, 40000, 50000);

employees.push(anilDev, sunilDev, maheshHr, sureshHr);

//calculating salary of employees
calculateSalaryOfEmployees();

//printing salary of employees
printSalaryOfEmployees();

//sorting employees
alert(`
    1. sort by id.
    2. sort by name
    3. sort by salary
    `
)
const sortChoice = Number(prompt('enter sort choice: ', '0'));
sortEmployees(sortChoice)

//filter employees with salary more than 1,10,000
const filteredEmployees = filterEmployees(110000)
console.log("employees with salary more than 110000");
filteredEmployees.forEach(e => console.log(`${e.name}: ${e.totalSalary}`))







