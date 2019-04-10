function checkNumber(val) {
    if(typeof val !== 'number') throw '유효하지 않은 값 입니다.';
    console.log('숫자형 값으로 확인 되었습니다.');
}

try {
    checkNumber(100);
    checkNumber('Wrong type');
} catch (e) {
    console.log(`에러 발생>>> ${e}`);
} finally {
    console.log('완료');
}

