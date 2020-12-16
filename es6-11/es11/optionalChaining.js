{
    const person1 = {
        name: 'Sangeun',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob'
            },
        },
    };

    const person2 = {
        name: 'Bob'
    }

    // As-Is: 없으면 에러 발생
    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }
        printManager(person1);
        printManager(person2);
    }

    //To-Be: 없으면 undefined 출력
    {
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }
        printManager(person1);
        printManager(person2);
    }
}