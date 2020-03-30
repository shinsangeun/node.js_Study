function solution(numbers) {
    var answer = '';

    let test = numbers.sort((a,b)=>{
        if(b[0] < a){
            console.log("test==>", a, b[0]);

        }
        return b-a;
    });

    console.log(test);

    return answer;
}

solution([3, 30, 34, 5, 9]);