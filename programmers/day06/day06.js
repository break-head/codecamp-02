//k번째 수
//for 반복문

function solution(array, commands) {
  for (let idx = 0; idx < commands.length; idx = idx + 1) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];

    // 배열을 slice 한 결과를 담아주는 변수
    const sliceResult = array.slice(i - 1, j).sort(function (a, b) {
      return a - b;
      // 오름차순
    });
    answer.push(sliceResult[k - 1]);
  }

  return answer;
}

//map
function solution(array, commands) {
  const answer = commands.map((el) => {
    const sliceResult = array.slice(el[0] - 1, el[1]).sort(function (a, b) {
      return a - b;
    });

    return sliceResult[el[2] - 1];
  });

  return answer;
}

//문자열 내림차순으로 정렬하기
//for 반복문, reverse 사용
function solution(s) {
  let answer = "";

  let arr = [];
  // 문자열을 배열로 만들어주기 위한 변수
  for (let i = 0; i < s.length; i = i + 1) {
    arr.push(s[i]);
  }

  arr = arr.sort(function (a, b) {
    return a > b ? -1 : 1;
  });
  answer = arr.join("");

  return answer;
}
// for 반복문, map, sort 내림차순
function solution(s) {
  const answer = s
    .split("")
    .sort(function (a, b) {
      return a > b ? -1 : 1;
    })
    .join("");

  return answer;
}
