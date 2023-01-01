function solution(citations) {
    citations = citations.sort((a,b)=> b-a);
    
    let idx = 0;
    while (idx <= citations.length){
        if(idx+1 <= citations[idx]){
            idx++
        }else break;
    }
    return idx;
}
    

/*
[위키] h -index는 h 개의 논문이 각각 적어도 h 개의 인용 을 갖도록 하는 가장 큰 숫자 h 입니다.
전체 논문중 많이 인용된 순으로 내림차순 정렬한 후, 
피인용수(ciations[i])가 논문수(idx+1)와 같아지거나 
피인용수가 논문수보다 작아지기 시작하는 숫자가 바로 나의 h가 된다.

h-index = 10 인 연구원이 있다면
논문 인용횟수가 10이 넘는 논문이 적어도 10편이 된다는 것을 의미

*/