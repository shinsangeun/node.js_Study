var person = 'harin';

function print() {
    var person2 = 'key';

    function innerPrint() {
        console.log(person);
        console.log(person2);
    }
    innerPrint();
    console.log('print finished');
}

print();
console.log('finished...');