function solution(s) {
    let stack = [];
    
    for(let i =0; i<s.length; i++){
        if(stack[stack.length-1] === s[i]){
            stack.pop();
        }else{
            stack.push(s[i])
        }
    }
    return stack.length > 0 ? 0 : 1;
}



/* 현재s[i] 와 stack 의 마지막 값이 일치하면 
짝지어서 제거한걸로 보고 stack에서 pop,
아니면 스택.push(s[i]) 못짝지음.
그래서 스택의 렝스가 0보다 크면 리턴 0 아니면 1 */