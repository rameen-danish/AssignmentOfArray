var employees = [
    {
        name: "Employee1",
        hoursWorked: 15,
        hourlyRate: 18,
        salary: 0
    },
    {
        name: "Employee2",
        hoursWorked: 20,
        hourlyRate: 25,
        salary: 0
    },
    {
        name: "Employee3",
        hoursWorked: 22,
        hourlyRate: 28,
        salary: 0
    },
];
function calculateSalary(employee) {
    var employeeSalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) { //If hours worked greater than or equal to 20 give 10% bonus to employee
        employeeSalary *= 1.1;
    }
    return employeeSalary;
}
employees.forEach(function (employees) {
    employees.salary = calculateSalary(employees); //Function calling
});
console.log("\n \t \t ***Employee Salaries*** \n");
console.log(employees); //Display employee details
