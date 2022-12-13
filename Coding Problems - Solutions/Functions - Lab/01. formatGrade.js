function formatGrade(grade) {
    let gradeOutcome = '';

    if (grade < 3) {
        gradeOutcome = 'Fail';
        grade = 2;
    } else if (grade < 3.5) {
        gradeOutcome = 'Poor';
    } else if (grade < 4.5) {
        gradeOutcome = 'Good';
    } else if (grade < 5.5) {
        gradeOutcome = 'Very good';
    } else {
        gradeOutcome = 'Excellent';
    }

    if (gradeOutcome === 'Fail') {
        return `${gradeOutcome} (${grade})`;
    } else {
        return `${gradeOutcome} (${grade.toFixed(2)})`;
    }

}

let formattedGrade = formatGrade(2.99);
console.log(formattedGrade);