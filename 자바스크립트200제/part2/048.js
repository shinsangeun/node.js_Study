const studentProto = {
    gainExp: function () {
        this.exp++;
    }
}

const student = {
    name: '뽀',
    age: 20,
    exp: 10,
    __proto__:studentProto
}

const harin = {
    name: '하린',
    age: 10,
    exp: 0,
    __proto__: studentProto
};


student.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(student);
