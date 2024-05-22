                         //Assignment2 Of Array Part 3
                        //Date: 22/May/2024
                        //Name: Rameen Rashid
/*Part 3: Array with Types and Indexing - Employee Salaries
Challenge:
You are managing employee salaries for a company. Implement logic to calculate salaries and handle bonuses.*/
type Employee ={                                                 //Define a type Employee to represent employee details
    name : string,
    hoursWorked : number,
    hourlyRate : number,
    salary : number
}
let employees : Employee[] = [                                   //Creating an array of employee containin employee objects
    {
        name : "Employee1",
        hoursWorked : 15,
        hourlyRate : 18,
        salary : 0
    },
    {
        name : "Employee2",
        hoursWorked : 20,
        hourlyRate : 25,
        salary : 0
    },
    {
        name : "Employee3",
        hoursWorked : 22,
        hourlyRate : 28,
        salary : 0
    },
];
function calculateSalary(employee:Employee): number {                             //Function for calculating salary
    let employeeSalary = employee.hoursWorked * employee.hourlyRate;
    if(employee.hoursWorked >=20){                                                //If hours worked greater than or equal to 20 give 10% bonus to employee
        employeeSalary *= 1.1;
}
return employeeSalary ;                                                        
}
employees.forEach(employees => {                                                        //Iterating each employee
    employees.salary = calculateSalary(employees);                                       //Function calling
});
console.log("\n \t \t ***Employee Salaries*** \n");
console.log(employees);                                                                      //Display employee details


