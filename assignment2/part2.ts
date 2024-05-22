                     //Assignment2 Of Array Part 2
                     //Date: 22/May/2024
                     //Name: Rameen Rashid
/*Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
Challenge:
You are tasked with creating a student grading system. Implement functions and logic to manage student grades effectivel*/
type Student = {                                            //Define a type Student to represent student name and grades
    name : string,
    grades : number[]
};
let students : Student[] = [ {                               //Creating an array of students containin student objects             
    name :"Rameen",
    grades :[80,79,89,85,80]
},
{
    name:"Abeeha",
    grades:[88,75,80,79,85]
},
{
    name:"Bismah",
    grades:[90,91,88,85,80]
}
];
function calculateAverageGrade(grades:number[]):number{                             //Creating a function for calculating student avearge grade
    let sum = grades.reduce((acc,grade) => acc + grade, 0);
    return sum/grades.length;
}
console.log("\n \t \t ***Students Grading System*** \n")
students.forEach (students =>{                                                           //for Display student details
    let averageGrade = calculateAverageGrade(students.grades);                          //function calling
    console.log(`${students.name} average grade is : ${averageGrade}`);
})

