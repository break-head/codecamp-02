// 문자열을 정수로 바꾸기
function solution(s) {
  return Number(s);
}

//핸드폰 번호 가리기
function solution(number) {
  let password = "";
  let phonenumber = "";

  for (let i = 0; i < number.length; i = i + 1) {
    if (i < number.length - 4) {
      password = password + "*";
    } else {
      phonenumber = phonenumber + number[i];
    }
  }
  let answer = password + phonenumber;
  return answer;
}

//같은 숫자는 싫어
function solution(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}
