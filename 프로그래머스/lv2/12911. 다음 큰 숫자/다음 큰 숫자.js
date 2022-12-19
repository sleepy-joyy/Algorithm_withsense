function solution(n) {
    let one = n.toString(2).match(/1/g).length;
    for(let i = n+1;; i++){
      let newOne = i.toString(2).match(/1/g).length;
      if(one === newOne){
          return i;
      }
      
    }
    
    
}