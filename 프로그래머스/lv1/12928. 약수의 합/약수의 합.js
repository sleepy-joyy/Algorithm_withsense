function solution(n) {
    var answer = 0;
    for(i=0;i<=n;i++) {
        if (n % i === 0) {
             answer += i;
        }
    }
    return answer;
}


//뭔가...약수구하는 반복문 코플릿이 생각났다.
//for 반복문 사용 i를 n까지 1씩 증가시켜서 확인한다.
//if  n을 i 로 나눠서 나머지가 0인 경우 --> 약수로 판단하고 answer에 더해서 누적할당
//나중에 return answer