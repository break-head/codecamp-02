//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  console.log(answer);

  if (answer.length === 0) {
    answer.push(-1);
  } else {
    answer.sort(function (a, b) {
      return a - b;
    });
  }
  return answer;
}

function solution(arr, divisor) {
  let answer = arr
    .filter((number) => {
      return number % divisor === 0;
    })
    .sort((a, b) => a - b);

  return answer.length === 0 ? -1 : answer;
}

//자연수 뒤집어 배열로 만들기
function solution(n) {
  let answer = [];

  n = String(n);
  for (let i = 0; i < n.length; i = i + 1) {
    answer.push(Number(n[i]));
  }
  answer.reverse();

  return answer;
}

function solution(n) {
  const answer = n
    .toString()
    .split("")
    .reverse()
    .map((el) => {
      return Number(el);
    });
  return answer;
}
