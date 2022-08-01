var Department = /** @class */ (function () {
    function Department(name) {
        var _this = this;
        this.name = name;
        this.employees = [];
        this.describeDepartment = function () {
            console.log("".concat(_this.name, " produces good graduates"));
        };
        this.addEmployee = function (employee) {
            _this.employees.push(employee);
        };
        this.printEmployeeDetails = function () {
            return _this.employees;
        };
        // this.name = name;
    }
    return Department;
}());
var FirstDepartment = new Department('Accounting');
console.log(FirstDepartment.describeDepartment());
FirstDepartment.addEmployee('Dabsia');
FirstDepartment.addEmployee('Dabo');
FirstDepartment.addEmployee('Daboikiabo');
FirstDepartment.addEmployee('Dave');
console.log(FirstDepartment.printEmployeeDetails());
