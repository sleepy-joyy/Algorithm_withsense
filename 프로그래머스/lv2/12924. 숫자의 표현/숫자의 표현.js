// function solution(n) {
//     let answer = 1 ;  //n자기 자신을 포함시켜야해서 +1
    
//     for(let i=1 ; i<=n; i++){
//         let sum = i
//         for(let j = i+1; j<=n; j++){    //1이후 수부터 j 연속된 수를 계속 합산해서
//             sum += j;
//             if(sum === n) answer++      //n이랑 같아지면 경우의 수를 1개올리고
//             if(sum > n) break;           //n보다 커지면 표현불가능이라 바로 break
//         }
//     }
//     return answer; 
// }
/* 효율성테스트 1,2 시간초과 실패 ㅜㅜ*/

function solution(n) {
    let answer = 0;
    
    for(let i=1 ; i<n; i++){
        let sum = i
        for(let j = i+1; j<=n; j++){  
            sum += j;
            if(sum === n) {
                answer++
                break; 
            }                              //n이랑 같아지면 경우의 수를 1개올리고 break 해버린다.
            if(sum > n) break;           //n보다 커지면 표현불가능이라 바로 break하고 다음 수로
        }
    }
    return answer+1; 
}


/* 정수론 정리에 의하면, 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수는 
주어진 수의 홀수 약수의 개수와 같다고 한다.

만약 n = 9라고 가정
약수: 1 3 9
홀수인 약수: 1 3 9  (3개)
연속된 자연수의 합 경우의 수: ㄱ) 2+3+4 ㄴ) 4+5  ㄷ) 9
*/

//  function solution(n) {
//     let answer = 0;
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0 && i % 2 === 1) answer++;        //약수이면서 홀수인 수를 구하면 끝!
//     }
//     return answer;
// }

