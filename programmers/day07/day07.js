//두개 뽑아서 더하기
function solution(numbers) {
  let answer = [];

  // i : 첫번째 인덱스
  for (let i = 0; i < numbers.length; i = i + 1) {
    // j : 두번째 인덱스
    for (let j = i + 1; j < numbers.length; j = j + 1) {
      // 첫번째 인덱스 값과 두번째 인덱스 값을 더해준 값을 저장하는 변수
      let sum = numbers[i] + numbers[j];

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }

  return answer.sort(function (a, b) {
    return a - b;
  });
}

//이상한 문자 만들기
//for 반복문
function solution(s) {
  let answer = "";

  // 반복문이 실행될 때 공백을 기준으로 인덱스 값을 저장하는 변수
  let idx = 0;
  for (let i = 0; i < s.length; i = i + 1) {
    if (s[i] === " ") {
      idx = 0;
      answer = answer + " ";
    } else {
      answer =
        answer +
        (idx % 2 === 0
          ? s[i].toUpperCase() // 짝수
          : s[i].toLowerCase()); // 홀수
      idx = idx + 1;
    }
  }

  return answer;
}
//map
function solution(s) {
  const answer = s
    .split(" ")
    .map((a) => {
      return a
        .split("")
        .map((b, i) => {
          return i % 2 === 0 ? b.toUpperCase() : b.toLowerCase();
        })
        .join("");
    })
    .join(" ");

  return answer;
}
