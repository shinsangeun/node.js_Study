function solution(arr){
    var answer = [];

    for(var i=0;i<arr.length; i++){
        if(arr[i] == arr[i+1]){
            answer.push(arr[i]);
            console.log("answer->", answer);
        }else{
            answer.splice(0);
        }
    }
    return answer;
}

solution([1,1,1,0,0,3]);
