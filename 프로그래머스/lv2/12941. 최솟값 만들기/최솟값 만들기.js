function solution(A,B){
    
    /*가장 작은수 * 가장큰수 해서 총합을 더하면 최소누적값
    오름차순, 내림차순 후 리듀스? */
    
    
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    return A.reduce((acc,cur,idx)=> acc+A[idx]*B[idx],0);
}