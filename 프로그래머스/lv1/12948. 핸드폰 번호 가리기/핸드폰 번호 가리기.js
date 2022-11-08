function solution(phone_number) {
    let star = ''
    let lastno;
    for(let i=0; i<phone_number.length-4; i++){
      star += '*';  
    }
    
    lastno = phone_number.slice(-4);
    return `${star}${lastno}`;
}