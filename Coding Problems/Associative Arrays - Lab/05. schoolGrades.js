function storedGrades(studentList) {
    let students = {};

    for (const line of studentList) {

        let name = line.split(' ');
        let grades = name.splice(1, name.length).map(Number);

        if (!students[name]) {
            students[name] = [];
        }
        students[name] = students[name].concat(grades);
    }
    let studentEntires = Object.entries(students);
    studentEntires.sort((a, b) => a[0].localeCompare(b[0]));
    let sortedStudents = Object.fromEntries(studentEntires);
    for (const name in sortedStudents) {
        let sum = 0;
        students[name].forEach(element => {
            sum += element;
        });

        let average = sum / students[name].length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }

}

storedGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);