function countingValleys(n, s) {
   let currentValue = 0;
   let valleyValue = 0;

   for(let i = 0;i < s.length;i++){
       if(s[i] === 'U'){
           currentValue += 1;
           if(currentValue == 0){
               valleyValue += 1;
           }
       }else{
           currentValue -= 1;
       }
   }
   console.log(valleyValue);
   return valleyValue;
}

countingValleys(12,"DDUUDDUDUUUD");