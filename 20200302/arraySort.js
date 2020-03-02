const array = [1, 5, 2, 6, 3, 7, 4];

function solution(array, commands) {
    var result = [];

    var temp;
    for(var i = 0; i < commands.length; i++){
        /*var result = array.splice(commands[i][0]-1, commands[i][1]-1);
        console.log("result-->", result);
        result.sort();
        var result2 = result[commands[i][2] - 1];
        console.log("result22:", result2);

        answer.push(result2);*/
        temp = array.slice(commands[i][0] - 1, commands[i][1]).sort(function(a, b){
            return a - b;
        });

        result.push(temp[commands[i][2] - 1]);
    }

    console.log(result);
    return result;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2,5,3],[4,4,1],[1,7,3]]);