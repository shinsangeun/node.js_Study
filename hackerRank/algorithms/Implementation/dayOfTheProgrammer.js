// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    if((1700 <= year) && (year <= 1917)){
        if((year % 4 ==0)){
            return "12.09." + year;
        }else{
            return "13.09." + year;
        }
    }else if((1919 <= year) && (year <=2700)){
        if((year == 2000)||(year == 2400)){
            return "12.09." + year;
        }
        if((year % 4 ==0) && (year % 100 ==0)){
            return "13.09." + year;
        }else if(year % 4 == 0){
            return "12.09." + year;
        }else{
            return "13.09." + year;
        }
    }else if(year == 1918){
        return "26.09." + year;
    }
}

dayOfProgrammer(2400);