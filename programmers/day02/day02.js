//수박수박수박수

function solution(n) {
  let rule = "";
  for (let i = 0; i < n; i = i + 1) {
    rule = rule + (i % 2 === 0 ? "수" : "박");
    // if(i % 2 === 0){
    //     rule = rule + '수'
    // } else {rule = rule + '박'
  }
  return rule;
}

///짝수와 홀수
function solution(num) {
  var answer = "";
  if (num % 2 === 0) {
    console.log((answer = "Even"));
  } else {
    console.log((answer = "Odd"));
  }
  return answer;
}

///평균 구하기
function solution(arr) {
  let result = 0;

  let sum = 0;

  for (let i = 0; i < arr.length; i = i + 1) {
    sum = sum + arr[i];
  }
  result = sum / arr.length;

  return result;
}
