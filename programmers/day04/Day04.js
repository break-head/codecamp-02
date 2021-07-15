//문자열 다루기 기본

function solution(s) {
  let answer = true;
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i = i + 1) {
    if (isNaN(s[i]) === true) {
      return false;
    }
  }
  return answer;
}
// s.split("").filter((str) => isNaNstr === true )
// .length === 0

//2016년
