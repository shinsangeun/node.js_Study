// 문장을 만들 때 문자열을 계속 더하는 것 보다는 가독성을 위해 아래것을 추천

{
    const weather = '☀️';
    const temperature = '21도';

    //As-Is
    console.log(
        'Today weather is ' + weather + ' and temperater is ' + temperature + '.'
    )

    //To-Be
    console.log(
        `Today weather is ${weather} and temperater is ${temperature}.`
    )
}