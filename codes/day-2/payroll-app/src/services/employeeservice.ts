//create a class with necessary methods for managing employee array
//export the same

import Employee from "../models/employee";
import employees from "../repository/employees";
import { ServiceManager } from "./servicemanager";

export class EmployeeService implements ServiceManager<Employee> {
    add(model: Employee): boolean {
        if (model && model !== null) {
            let found = employees.find(e => e.id === model.id)
            if (!found) {
                employees.push(model)
                return true
            }
            else
                throw new Error(`the employee with ${model.id} already exists`)
        } else
            throw new Error('model data in absent')
    }
    calculateSalaryOfEmployees(): Readonly<Employee[]> {
        employees.forEach(e => e.calculateSalary());
        return [...employees]
    }
    get(id: number): Employee {
        if (employees.length > 0) {
            let found = employees.find(e => e.id === id)
            if (found)
                return found
            else
                throw new Error(`employee with id:${id} does not exist`);
        } else
            throw new Error(`no employee records found at all...`);
    }
    getAll(): Readonly<Employee[]> {
        if (employees.length > 0) {
            return [...employees]
        } else
            throw new Error(`no employee records found at all...`);
    }
    filterEmployees(criteriaSalary: number): Readonly<Employee[]> {
        return employees.filter(e => e.totalSalary > criteriaSalary)
    }
    sortEmployees(choice: number): Readonly<Employee[]> {
        let sortedEmployees: Employee[] = [];
        switch (choice) {
            case 1:
                sortedEmployees = employees.sort((e1, e2) => e1.id - e2.id);
                break;

            case 2:
                sortedEmployees = employees.sort((e1, e2) =>
                    e1.name
                        .toLocaleLowerCase()
                        .localeCompare(
                            e2.name.toLocaleLowerCase()
                        )
                );
                break;

            case 3:
                sortedEmployees = employees.sort((e1, e2) => e1.totalSalary - e2.totalSalary);
                break;

            default:
                sortedEmployees = employees.sort((e1, e2) => e1.id - e2.id);
                break;
        }

        return [...sortedEmployees]
    }
}