import { Developer } from "./models/developer";
import Employee from "./models/employee";
import { Hr } from "./models/hr";
import { EmployeeService } from "./services/employeeservice";

const employeeService = new EmployeeService();

function clicked() {
    window.alert('clicked...')
}

document.getElementById('btnClick')?.addEventListener('click', clicked)

function createEmployee(): Employee | null {
    const txtId = document.getElementById('txtId') as HTMLInputElement;
    const txtName = document.getElementById('txtName') as HTMLInputElement;
    const txtBasic = document.getElementById('txtBasic') as HTMLInputElement;
    const txtDa = document.getElementById('txtDa') as HTMLInputElement;
    const txtHra = document.getElementById('txtHra') as HTMLInputElement;
    const txtExtra = document.getElementById('txtExtra') as HTMLInputElement;

    const id = Number(txtId.value);
    const name = txtName.value;
    const basic = Number(txtBasic.value);
    const da = Number(txtDa.value);
    const hra = Number(txtHra.value);
    const extra = Number(txtExtra.value);

    const radioDev = document.getElementById('radioDev') as HTMLInputElement;
    const radioHr = document.getElementById('radioHr') as HTMLInputElement;


    if (radioDev.checked) {
        return new Developer(id, name, basic, da, hra, extra);
    } else if (radioHr.checked) {
        return new Hr(id, name, basic, da, hra, extra);
    } else
        return null;
}

function addRecord() {
    try {
        const employee = createEmployee();
        if (employee !== null) {
            console.log(employeeService.add(employee) ? 'added' : 'could not add');
        }
    } catch (error) {
        console.log(error);
    }
}

document.getElementById('btnSubmit')?.addEventListener(
    'click',
    function () {
        addRecord();
        employeeService.calculateSalaryOfEmployees();
        employeeService
            .getAll()
            .forEach(
                e => console.log(`Salary of ${e.name} is ${e.totalSalary}`)
            )
    }
);

document.getElementById('ddlSort')?.addEventListener(
    'change',
    (e: Event) => {
        const ddlSort = e.target as HTMLSelectElement;

        // const selectOptions = ddlSort.options;
        // const index = ddlSort.selectedIndex;
        // const selectedOption = selectOptions[index]
        // const selectedChoice = Number(selectedOption.value);

        const selectedChoice = Number(ddlSort.options[ddlSort.selectedIndex].value);

        employeeService
            .sortEmployees(selectedChoice)
            .forEach(
                e => console.log(`Id:${e.id}, Name:${e.name}, Salary:${e.totalSalary}`)
            )
    }
)

document.getElementById('txtFilter')?.addEventListener(
    'input',
    (e: Event) => {
        const filterText = (e.target as HTMLInputElement).value
        if (filterText && filterText !== '') {
            const filteredEmployees = employeeService.filterEmployees(Number(filterText))
            console.log(`employees with salary more than ${Number(filterText)}`);
            filteredEmployees.forEach(e => console.log(`${e.name}: ${e.totalSalary}`))
        }
    }
)

// const anilDev = new Developer(3, "anil", 10000, 20000, 30000, 40000);
// const sunilDev = new Developer(1, "sunil", 12000, 22000, 32000, 42000);
// const maheshHr = new Hr(4, "mahesh", 15000, 25000, 35000, 45000);
// const sureshHr = new Hr(2, "suresh", 20000, 30000, 40000, 50000);

//add employees
// employeeService.add(anilDev);
// employeeService.add(sunilDev);
// employeeService.add(maheshHr);
// employeeService.add(sureshHr);

// //calculating salary of employees
// employeeService.calculateSalaryOfEmployees();

// //printing salary of employees
// employeeService.getAll().forEach(
//     e => console.log(`Salary of ${e.name} is ${e.totalSalary}`)
// )

// //sorting employees
// alert(`
//     1. sort by id.
//     2. sort by name
//     3. sort by salary
//     `
// )
// const sortChoice = Number(prompt('enter sort choice: ', '0'));
// employeeService.sortEmployees(sortChoice).forEach(
//     e => console.log(`Id:${e.id}, Name:${e.name}, Salary:${e.totalSalary}`)
// )

// //filter employees with salary more than 1,10,000
// const filteredEmployees = employeeService.filterEmployees(110000)
// console.log("employees with salary more than 110000");
// filteredEmployees.forEach(e => console.log(`${e.name}: ${e.totalSalary}`))







