// 함수 인자가 전달 되지 않았을 경우 지정된 초기 값을 뿌려 주는 기능

{
    {
        //As-Is
        function printMessage(message) {
            if(message == null){
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();

        //To-Be
        function printMessage(message= 'default message') {
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }
}