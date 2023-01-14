function solution(s) {
    let answer = [];
    let check = [];
    s = s.split('')
    
    
    s.forEach((v,index)=> {
    if(check.includes(v)){
        let b4Idx = check.lastIndexOf(v);
        check.push(v);
        answer.push(index-b4Idx);
    }
    else { 
      check.push(v)
      answer.push(-1)
    }
  })
    return answer;
}