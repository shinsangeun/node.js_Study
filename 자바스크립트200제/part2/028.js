var family = {
    'address':'Seoul',
    members : {},
    addFamily: function (age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        };
    },
    getHeadCount: function () {
        return Object.keys(this.members).length;
    }
};

family.addFamily(30, 'lyn', 'niece');
family.addFamily(20, 'chloe', 'aunt');
family.addFamily(2, 'dangdangi', 'dog');
console.log(family.getHeadCount());