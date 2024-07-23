//create employee class
//export the same

class Employee {
    totalSalary = 0;

    constructor(public id: number, public name: string, public basicPayment: number, public daPayment: number, public hraPayment: number) {

    }
    calculateSalary() {
        this.totalSalary = this.basicPayment + this.daPayment + this.hraPayment
    }
}

export default Employee