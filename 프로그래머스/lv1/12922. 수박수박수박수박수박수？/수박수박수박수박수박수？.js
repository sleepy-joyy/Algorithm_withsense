function solution(n) {
    var answer = '';
//풀이1
    for(let i = 1 ; i <= n ; i++){
        if(i%2===0){
            answer += "박";
        }else answer +="수";
    } return answer;
}

// 풀이2
//     for(let i=1; i < math.floor(n/2); i++){
//         answer += "수박";
//     }
//     return (i%2!==0) ? answer +="수" : answer
    
