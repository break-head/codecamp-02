//완주하지 못한 선수

function solution(participant, completion) {
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
