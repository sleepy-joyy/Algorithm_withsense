function solution(clothes) {

    let answer = 1;
    let obj = {};
    
    for(let i=0; i<clothes.length; i++){
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    }
    for(let key in obj){
        answer *= obj[key];
    }
    
    return answer-1;
}
    
/*
[
    ["yellow_hat", "headgear"], 
    ["blue_sunglasses", "eyewear"], 
    ["green_turban", "headgear"]
]	


의상들배열을 돌면서, obj에 넣어줌.
의상의 종류를 키로하고, 키의 값을 하나씩 누적하자
만약 키가 없다면 만들어주고 1을 넣어준다.
있다면 그 키의 값으로 +1씩 더해준다.


만약
상의가 A,B,C 3개가 있을 때 
상의를 입는 경우의 수는 [A, B, C, 입지 않는다.]로 총 3+1가지

그리고 의상의 종류별로 각 값들을 곱해준다.
그 곱에서 최종적으로 모든 의상종류를 다 입지 않은 경우인 1가지 경우의 수를 -1을 빼준다.*/