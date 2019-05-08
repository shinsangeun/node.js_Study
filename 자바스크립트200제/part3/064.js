function callRoll(students) {
    if(!Array.isArray(students)) return;

    students.forEach((student) => {
        console.log(`${student}`);
    });
}

const students = ['Jun', 'Ali', 'Marry', 'Toby'];
callRoll(students);