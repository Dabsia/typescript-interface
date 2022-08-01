class Department {
    employees : string[] = []
    constructor(private name: string) {
        // this.name = name;
    }

    describeDepartment = () => {
        console.log(`${this.name} produces good graduates`)
    }

    addEmployee = (employee: string) => {
        this.employees.push(employee)
    }

    printEmployeeDetails = () => {
        return this.employees
    }
}

const FirstDepartment = new Department('Accounting')

console.log(FirstDepartment.describeDepartment())
FirstDepartment.addEmployee('Dabsia')
FirstDepartment.addEmployee('Dabo')
FirstDepartment.addEmployee('Daboikiabo')
FirstDepartment.addEmployee('Dave')
console.log(FirstDepartment.printEmployeeDetails())
