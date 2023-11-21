function schoolRegister(arr) {
    let students = {};

    for (const iterator of arr) {
        let [name, grade, score] = iterator.split(", ");
        name = name.slice(14);
        grade = Number(grade.slice(7));
        score = Number(score.slice(33));
        if (score < 3) {
            continue;
        }
        grade += 1;
        if (students[grade]) {
            students[grade].push({ name, score });
        } else {
            students[grade] = [{ name, score }];
        }
    }

    let sorted = Object.entries(students).sort((a, b) => a[0] - b[0]);

    sorted.forEach(element => {
        console.log(`${element[0]} Grade`);
        let studentNames = []
        for (const iterator of element[1]) {
            studentNames.push(iterator.name);
        }
        console.log("List of students:", studentNames.join(", "));
        console.log(`Average annual score from last year: ${(element[1].reduce((a, b) => a + b.score, 0) / element[1].length).toFixed(2)}`);
        console.log();
    });
}


schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
);