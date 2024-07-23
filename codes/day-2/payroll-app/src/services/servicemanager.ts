export interface ServiceManager<T> {
    add(model: T): boolean;
    sortEmployees(choice: number): Readonly<T[]>;
    calculateSalaryOfEmployees(): Readonly<T[]>;
    filterEmployees(criteriaSalary: number): Readonly<T[]>;
    getAll(): Readonly<T[]>;
    get(id: number): T;
}