for(var i=0; i<10; i++){
    console.log(i + '번째 반복 문장..');
}

var hometown = [
    {name: '까꽁이', place: '일산', city: '고양'},
    {name: '진', place: '광주'},
    {name: '호석', place:'과천', city: '전라도'},
    {name: '길동', place: '부산', city: '경상도'}
];

for(var i=0; i<hometown.length; i++){
    var h = hometown[i];
    if (!h || !h.city) continue;

    console.log(i + '번째 실행 중..');

    if(h.name == '까꽁이'){
        console.log(h.name + '의 고향은 ' + h.city + ' ' +h.place + ' 입니다.');
        break;
    }
}