let user = {};
Object.defineProperty(user, "age", {
    get: function () {
        return this._age;
    },
    set: function (age) {
        if(age < 0){
            console.error('0보다 작은 값은 올수 없습니다.');
        } else {
            this._age = age;
        }
    },
    enumerable: true
});

user.age = 10;
console.log(user.age);
user.age = -1;

let user2 = {
    get name() {
        return this._age;
    },
    set name(val) {
        if (val.length < 3) {
            throw new Error('3자 이상 입력');
        }
        this._name = val;
    }
}

user2.name = 'harin';
console.log(user2.name);
user2.name = 'ha3';