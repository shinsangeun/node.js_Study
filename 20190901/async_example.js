async function test(){
    await foo(1, 2000)
    await foo(2, 500)
    await foo(3, 1000)
}

function foo(num, sec){
    setTimeout( function(){
        console.log(num);
    }, sec);
}

test();
