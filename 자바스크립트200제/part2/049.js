function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
        console.log(student + '에게 ' + this.subject + '를 가르칩니다.');
    }
}

const sse = new Teacher('sse', 26, 'Javascript');
console.log(sse);
sse.teach('bbo');

console.log(sse.constructor);
console.log(sse instanceof Teacher);

const sse2 = Teacher('sse', 26, 'Javascript');
console.log(sse2);
console.log(age);
