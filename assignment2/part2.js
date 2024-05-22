var students = [{
        name: "Rameen",
        grades: [80, 79, 89, 85, 80]
    },
    {
        name: "Abeeha",
        grades: [88, 75, 80, 79, 85]
    },
    {
        name: "Bismah",
        grades: [90, 91, 88, 85, 80]
    }
];
function calculateAverageGrade(grades) {
    var sum = grades.reduce(function (acc, grade) { return acc + grade; }, 0);
    return sum / grades.length;
}
console.log("\n \t \t ***Students Grading System*** \n");
students.forEach(function (students) {
    var averageGrade = calculateAverageGrade(students.grades); //function calling
    console.log("".concat(students.name, " average grade is : ").concat(averageGrade));
});
