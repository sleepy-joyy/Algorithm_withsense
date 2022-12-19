// function solution(s){
//     let pair = 0;

//     for(let i=0; i<s.length; i++) {
//         if(s[i] === '(') pair++;
//         else pair--;
        
//         if(pair<0) {
//             return false
//         }
//     }
//     return pair!==0 ? false : true
// }
    
    
    




    
function solution(s){

    var answer = true;
    let open = 0;
    let close = 0;
    

    if(s[0]=== ')') { 
        return false 
    } else {
     for(let i=0;i<s.length;i++){
        if(s[i] === "(") open++;
        else close++;
        if(open < close) return false;
     }
    }
    return open !== close ? false :true;
  }

