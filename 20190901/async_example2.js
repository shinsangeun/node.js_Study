async function test(){
    async function goo(){
        await foo(1, 2000)
    }
    await goo()
    await foo(2, 500)
    await foo(3, 1000)
}

test();