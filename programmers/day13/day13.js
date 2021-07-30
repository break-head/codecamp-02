// x만큼 간격이 있는 n개의 숫자
// for 반복문

function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }

  return answer;
}

// map

function solution(x, n) {
  const answer = new Array(n).fill(x).map((number, index) => {
    return x * (index + 1);
  });
}
