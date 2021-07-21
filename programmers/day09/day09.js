//하샤드 수
// for 반복문
function solution(x) {
  let sum = 0;

  x = x.toString();
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }

  return x % sum === 0;
}
//reduce
function solution(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((el, cu) => {
      return Number(el) + Number(cu);
    }, 0);

  return x % sum === 0;
}

//폰켓몬
// for 반복문
function solution(nums) {
  let pocket = []; // 각각 다른 종류의 폰켓몬을 담아주는 배열

  for (let i = 0; i < nums.length; i = i + 1) {
    if (pocket.includes(nums[i]) === false && pocket.length < nums.length / 2) {
      pocket.push(nums[i]);
    }
  }

  return pocket.length;
}

//filter
function solution(nums) {
  let pocket = []; // 각각 다른 종류의 폰켓몬을 담아주는 배열

  nums.filter((monster) => {
    return pocket.includes(monster) === false && pocket.length < nums.length / 2
      ? pocket.push(monster)
      : null; // 아무것도 실행되지 않음
  });

  return pocket.length;
}

//set Map
function solution(nums) {
  return [...new Set(nums)].length > nums.length / 2
    ? nums.length / 2
    : [...new Set(nums)].length;
}
