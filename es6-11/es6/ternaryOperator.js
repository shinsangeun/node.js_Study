// 3항 연산자

{
    const isDog = true;

    //As-Is
    {
        let component;
        if(isDog){
            component = '🐶';
        }else{
            component = '🐼';
        }
        console.log(component);
    }

    // To-Be
    {
        const component = isDog ? '🐶':'🐼';
        console.log(component);
    }
}