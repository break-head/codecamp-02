//약수의합 
function solution(n) {
    const answer = [];
    for(let i = 0; i <= n; i = i + 1){
        if(n % i === 0){
            answer.push(i)
        }       
    }
    const sum = answer.reduce((a,b) => a + b,0);
    return sum;
}

//     let result = 0;
//     for(let i = 0; i <= n; i = i + 1){
//         if(n % i === 0){
//             result = result + i;
//         }       
//     }
//     return result;
// }

//자릿수 더하기

function solution(n)
{   let result = 0;
    
    n = string(n);
    for(let i =0, i < n.length; i = i + 1){
        result = result = Number(n[i])
    }
    return answer;
}


