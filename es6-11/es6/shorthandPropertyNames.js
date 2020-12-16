/*
* Shorthand property names
* key와 value가 같을 때는 하나만 써줘도 가능
* */

{
    const code1 = {
        name: 'sangeun',
        age: '18'
    };

    const name = 'sangeun';
    const age = '18';

    const code2 = {
        name: name,
        age: age
    };

    const code3 = {
        name,
        age
    };

    console.log(code1, code2, code3);
}