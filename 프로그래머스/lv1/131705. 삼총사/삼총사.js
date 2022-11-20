function solution(number) {
    var answer = 0;
    
    
    //배열의 값들을 삼중for문..?
    //배열의 [i]+[j]+[k] === 0 이면 answer + 
    
    
    for(let i = 0; i<number.length; i++){  
        for(let j =i+1; j<number.length; j++){  
            for(let k = j+1; k <number.length; k++){ 
                if(number[i]+number[j]+number[k] === 0){
                    answer++
                }
            }
        }
    }
    return answer;
}