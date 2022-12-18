function solution(s){
    let pair = 0;

    for(let i=0; i<s.length; i++) {
        if(s[i] === '(') pair++;
        else pair--;
        
        if(pair<0) {
            return false
        }
    }
    return pair!==0 ? false : true
}
    
    
    
    
/* 아래풀이론 채점시 테케 4,5,11,18 실패 _효율성은 통과

    var answer = true;
    let open = 0;
    let close = 0;
    

    if(s[0]=== ')') { 
        return false 
        
    } else {
     for(let i=0;i<s.length;i++){
        if(s[i] === "(") open++;
        else close++;
     }
    }
    return open === close ? true :false;
  }

*/