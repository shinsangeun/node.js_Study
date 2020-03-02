function solution(participant, completion) {
    /*
   for(let i in participant) {
       if(completion.includes(participant[i]) == false) return participant[i];
       completion.splice(completion.indexOf(participant[i]), 1);
   }
   */

    participant.sort();
    completion.sort();

    for(let i in participant) {
        console.log("participant[i]==>", participant[i]);

        if(participant[i] !== completion[i]) return participant[i];
    }
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
