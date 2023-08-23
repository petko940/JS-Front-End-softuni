function formatGrade(grade) {
    grade = grade.toFixed(2);
    if (grade < 3) {
        return `Fail (2)`;
    } else if (grade >= 3.00 && grade < 3.50) {
        return `Poor (${grade})`;
    } else if (grade >= 3.50 && grade < 4.50) {
        return `Good (${grade})`;
    } else if (grade >= 4.50 && grade < 5.50) {
        return `Very good (${grade})`;
    } else if (grade >= 5.50) {
        return `Excellent (${grade})`;
    }
}
