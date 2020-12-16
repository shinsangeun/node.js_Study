/*
* Spread Syntax
* object나 array를 나열하는 기능
* */

{
    const obj1 = {key: 'key1'};
    const obj2 = {key: 'key2'};
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, {key: 'key3'}];
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    //object copy
    const obj3 = {...obj1};
    console.log(obj3);
}
