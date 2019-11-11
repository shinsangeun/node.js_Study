function scanInfo(){
    var scanInfo = {"a":100,"b":300};
    console.log(scanInfo);
    return scanInfo;
}

function configInfo(){
    var a1 = scanInfo();
    var a2 = JSON.stringify(a1);
    var a3 = a2 + JSON.stringify({"c" : 222});
    console.log(a3);
    return a3;
}

async function test() {
    await scanInfo();
    await configInfo();
    console.log("실행 끝");
}
test();

