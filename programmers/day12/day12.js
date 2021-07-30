// 정수 제곱근 판별
// 1) while 반복문

function solution(n) {
  // 초기 제곱근 값
  let sqrt = 0;

  while (sqrt * sqrt < n) {
    // 조건식이 true일 경우에만
    // 아래의 반복 코드가 실행이 됩니다.

    //sqrt = sqrt + 1;
    sqrt++;

    if (sqrt * sqrt > n) {
      return -1;
    }
  }

  sqrt++; // sqrt = sqrt + 1;
  return sqrt * sqrt;
}

// 2) sqrt 메소드

function solution(n) {
  // 초기 제곱근 값

  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt) === true) {
    // 정수인 경우 === 제곱근이다.
    sqrt++;
    return sqrt * sqrt;
  } else {
    // 정수가 아니다. === 제곱근이 아니다.
    return -1;
  }
}
