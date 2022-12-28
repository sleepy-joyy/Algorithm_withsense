function solution(arr) {

const getGCD = (a,b) => { return a%b===0 ? b : getGCD(b,Math.floor(a%b))}
const getLCM = (a,b) => { return Math.floor(a*b/getGCD(a,b))}
 
/* 유클리드 호제법
-- [최대공약수 GCD]
임의의 두 자연수 a, b가 주어졌을때
a를 b로 나눈 나머지를 n 이라고 하면 (a%b = n)
n이 0일때, b가 최대 공약수(GCD)
만약 n이 0이 아니라면, 
a에 b값을 다시 넣고 n를 b에 대입 한 후 다시 반복

--[최소공배수 LCM]
  LCM = a*b / GCD
*/
    
    let answer = arr[0]
    for(let i = 1; i < arr.length; i++){
        answer = getLCM(answer, arr[i]);
    }
    return answer;
}
        
/* 최소공배수 : 서로 공통으로 존재하는 배수 중 가장 작은 수 
배열의 0번째요소랑 그다음번째 인덱스값을 넣어서 최소공배수(LCM)구하기,
그 최소 공배수와, 그다음번 arr[i]요소 값을 넣어서 최소공배수 또 구하기.
배열의 끝까지 돌고나면, 모든 배열 N개 요소의 최소공배수를 구한게 됨.
정렬을 안해도 배열전체의 최소공배수가 구해지는 이유.
*/


    
    
    
    
    
    