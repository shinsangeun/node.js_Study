function jumpingOnClouds(c) {
    let array = [0];
   // let arrayLength = c;

    for(let i=0;i<c-1; i++){
        array.push(Math.floor(Math.random() * 1) +1);
        console.log("array2-->", array);
    }
    console.log("array-->", array);

    let count = 0;
    for(let k = 0; k<c-1; k++){
        if(array.indexOf(1) !== -1){
        count++;
        console.log("22-->", count);
        }
    }
    console.log("count-->", c-count);

    return c-count;
}

jumpingOnClouds(5);