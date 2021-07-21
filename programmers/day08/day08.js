//콜라츠 추측
//While 반복문
function solution(num) {
  // 초기 설정값
  let count = 0;

  // 괄호 안은 조건문 === true 일 때만 실행이 된다.
  while (num !== 1) {
    if (num % 2 === 0) {
      // 짝수
      num = num / 2;
    } else if (num % 2 === 1) {
      // 홀수
      num = num * 3 + 1;
    }

    // count = count + 1;
    count++;
  }

  if (count >= 500) {
    return -1;
  } else {
    return count;
  }
}
//재귀함수 : Recursion
function solution(num) {
  function recursion(num, count) {
    if (num === 1) {
      return count;
    } else if (count >= 500) {
      return -1;
    } else {
      num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
      count++; // count = count + 1;

      return recursion(num, count);
    }
  }

  return recursion(num, 0);
}

//문자열 p와 y의 개수
function solution(s) {
  s = s.toLowerCase();

  const check = {
    p: 0,
    y: 0,
  };

  for (let i = 0; i < s.length; i = i + 1) {
    check[s[i]] = check[s[i]] + 1;
  }

  return check["p"] === check["y"];
}
