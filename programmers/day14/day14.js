//행렬의 덧셈

//for 반복문
function solution(arr1, arr2) {
  let answer = [[]];
  // i = i + 1;
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];

    for (let l = 0; l < arr1[i].length; l++) {
      // arr1 의 숫자 값과 arr2 의 숫자 값을 더해서 저장하는 상수
      const sum = arr1[i][l] + arr2[i][l];

      //answer[i][l] = sum;
      answer[i].push(sum);
    }
  }

  return answer;
}

//map
function solution(arr1, arr2) {
  return arr1.map((num1, i) => {
    return num1.map((num2, l) => {
      // return arr1[i][l] + arr2[i][l];
      return num2 + arr2[i][l];
    });
  });
}
