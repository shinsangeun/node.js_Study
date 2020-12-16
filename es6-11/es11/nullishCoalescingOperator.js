// null, 0, 빈칸 체크 하기 위한 기능
// false: false, '', 0, null, undefined

{
    // As-Is
    {
        const name = 'Alice';
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName);

        const num = 0;
        const message = num || 'undefined';
        console.log(message);
    }

    // To-Be
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }
}