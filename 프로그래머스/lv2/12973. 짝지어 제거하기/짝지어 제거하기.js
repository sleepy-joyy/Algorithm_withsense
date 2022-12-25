function solution(s)
{
    let tmp = s.split("");
    let removed
    
    for(let i=0; i<tmp.length; i++){
            if(tmp[i] === tmp[i+1]){
                tmp.splice(i,2);
            }else continue;
        }   
    if(tmp.lenth === 0){
        return 1
    }else return 0;
    
}