function timeConversion(s) {
   var hour = s.split(":");
   var PM = "PM";
   var AM = "AM";

   if(hour[2].indexOf(PM)!= -1) {
      if (hour[0] > 12) {
         hour[0] = parseInt(hour[0]) - 12;
         return hour[0] + ":" + hour[1] + ":" + hour[2].replace(PM,'');
      } else if (hour[0] == 12) {
         return hour[0] + ":" + hour[1] + ":" + hour[2].replace(PM,'');
      } else {
         hour[0] = parseInt(hour[0]) + 12;
         return hour[0] + ":" + hour[1] + ":" + hour[2].replace(PM,'');
      }
   }else if(hour[2].indexOf(AM)!= -1) {
      if(hour[0] == 12){
         hour[0] = parseInt(hour[0]) - 12;
         return "0" + hour[0] + ":" + hour[1] + ":" + hour[2].replace(AM,'');
      }else if(hour[0] < 12){
         hour[0] = hour[0];
         return hour[0] + ":" + hour[1] + ":" + hour[2].replace(AM,'');
      }
   }
}

timeConversion("12:45:54PM");