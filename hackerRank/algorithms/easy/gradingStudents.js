function gradingStudents(grades) {
    for (var i = 0; i < grades.length; i++)
    {
        if (grades[i] >= 38) {
            if (grades[i] + (5 - grades[i] % 5) - grades[i] < 3)
                grades[i] = (grades[i] + (5 - grades[i] % 5));
        }
    }
    return grades;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

    let result = gradingStudents(grades);

    ws.write(result.join("\n") + "\n");

    ws.end();
}