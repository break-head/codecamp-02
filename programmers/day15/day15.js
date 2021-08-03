//제일 작은 수 제거하기
function solution(arr) {
  const min = Math.min(...arr);
  const result = arr.filter((num) => num > min);
  return result.length === 0 ? [-1] : result;
  //     let answer = [];
  //     let min = arr[0]
  //     for(let i = 1; i < arr.length; i++){
  //         if(min > arr[i]){
  //             min = arr[i]
  //         }
  //     }
  // for문이랑 같은 결과 const min = Math.min.apply(null,arr)
  //     arr.splice( arr.indexOf(min),1 )
  //     if(arr.length === 0){
  //         return[-1]
  //     }

  //     return arr;
}
