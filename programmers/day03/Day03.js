//서울에서 김서방 찾기

function solution(seoul) {
  // const x - seoul.indexof('kim')

  let x = 0;
  for (let i = 0; i < seoul.length; i = i + 1) {
    if (seoul[i] === "Kim") {
      x = i;
    }
  }
  return "김서방은 " + x + "에 있다";
}

//가운데 글자 가져오기

function solution(s) {
  let result = "";
  for (let i = 0; i < s.length; i = i + 1)
    if (s.length % 2 === 1) {
      result = s[Math.floor(s.length / 2)];
    } else {
      result = s[s.length / 2 - 1] + s[s.length / 2];
    }

  return result;
}
삼항연산자;
// const result = s.length % 2 === 1
//     ? s[Math.floor(s.length/2)]
//     : s[(s.length/2)-1] + s[s.length/2]

//두 정수 사이의 합

function solution(a, b) {
  let answer = 0;
  if (a === b) {
    return a;
  } else {
    let start = a > b ? b : a;
    //let start = Math.min(a, b);
    // 반복문이 실행될때 설정되는 초기값(a와b 중에 작은 값이 들어온다)
    let end = a > b ? a : b;
    //let end = Math.max(a, b);
    // 반복문이 종료되는 조건을 설정(a와 b 중에 큰값이 들어온다.)

    for (let i = start; i <= end; i = i + 1) {
      result = result + i;
    }
  }
  return answer;
}

// Math.max()를 활용하여 문제를 푼다.
