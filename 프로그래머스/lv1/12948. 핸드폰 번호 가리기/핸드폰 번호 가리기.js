function solution(phone_number) {
    let star = ''
    let lastno;
    for(let i=0; i<phone_number.length-4; i++){
      star += '*';  
    }
    
    lastno = phone_number.slice(-4);
    return `${star}${lastno}`;
}


//별모양을 누적해서 담을 변수 선언
//마지막 4자리 숫자를 담을 변수선언

//for문을 돌면서 전체 폰넘어 길이의 -4만큼 * 누적
//slice를 통해 뒤에서부터 4자리를 가져옴
//템플릿으로 이어주고 리턴