function solution(n) {
    let arr = Array(n).fill(0)
    arr[1] = 1;
    
    for(let i = 2; i<=n; i++){
        arr[i] = (arr[i-1] + arr[i-2]) % 1234567
    }
    return arr[n]
}



/*
방법 #1 재귀 호출 대신 반복문을 사용하기
재귀 호출 대신 for문을 사용해서 첫 번째, 두 번째, 세 번째, ..., n번째 피보나치 수를 순서대로 구해보세요.
이러한 풀이 방식을 동적 계획법(Dynamic Programming)이라고 합니다.
*/