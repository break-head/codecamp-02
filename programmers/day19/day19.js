// 피보나치 수
// 0, 1, 1, 2, 3, 5, 8
function solution(n) {
  //피보나치의 숫자들을 순서대로 담아주는 배열
  const answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }

  return answer[n];
}

function solution(n) {
  let [prev, next, sum] = [0, 1, 1];
  //prev = F(n-2) : 초기값 = 0;
  //next = F(n-1) : 초기값 = 1;
  //sum = F(n-2) + F(n-1)

  for (let i = 2; i <= n; i++) {
    sum = (prev + next) % 1234567;
    prev = next;
    next = sum;
  }
  return sum;
}
