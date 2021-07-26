//완주하지 못한 선수

1)     function solution(participant, completion) {
        const total = participant.length;
        let answer = "";

        participant.sort();
        completion.sort();

        for (let i = 0; i < total; i++) {
          if (participant[i] !== completion[i]) {
            answer = participant[i];
            return answer;
          }
        }
      }

2)     function solution(participant, completion) {
        let answer = '';
        
        for(let i = 0; i<completion.length; i = i + 1){
            if(participant.includes(completion[i])===true){
                participant.splice( participant.indexOf(completion[i]),1)
            }
            break;
            
            // return participant[i]
        }
        return participant[0]   
      }


3)    function solution(participant, completion){
      let answer ='';
      participant = participant.sort();
      completion = completion.sort();
      // 합격자가 아닌 참가자의 이름이 최초로 들어갔는지를 판단해주는 변수이다.
      //(type : boolean = true, false)
      let stop = false;
      participant.forEach((name,i)=> {
          if(name !== completion[i]&&stop === false){
              answer = name;
              stop = true
          }
      })
      return answer
    }