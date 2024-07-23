//import employee class
//create hr class inheriting from employee
//export the same

import Employee from './employee'

export class Hr extends Employee {
    constructor(id: number, name: string, basic: number, da: number, hra: number, public gratuityPayment: number) {
        super(id, name, basic, da, hra)
    }
    calculateSalary() {
        super.calculateSalary();
        this.totalSalary += this.gratuityPayment
    }
}