function solution(s, n) {
    var answer = '';
    
    //charCodeAt() 메소드(함수)로, 문자를 아스키코드 번호로 변환
    //fromCharCode() 로는, 정반대로, 문자 번호를 진짜 문자로 변환
    
    //65~90 영문 대문자
    //97~122 영문 소문자
    //32는 공백
    
    //abcdefghij   klmnopqrst  uvwxyz
    //12345678910  12345678910 123456   ==>알파벳은 26자.
    
    //만약 들어온 문자열이 공백이면 --> 공백 리턴
    //만약 소문자면 --> 소문자 범위내 에서 +n  (z->a (초기화)를 어떻게 구현하지ㅠㅠ)
    //인덱스별로 돌면서 확인? 와씨 개어렵다..ㅠ_ㅠ.

    for (let i =0; i<s.length; i++){
        let getAscii = s.charCodeAt(i);
        if (getAscii === 32 ){   //32면 공백 --> 공백 더하기
            answer += " ";
            
   //아스키코드 그 자체로 90 보다 작거나 같으면서(대문자인디 동시에) n을 더한 값이 '대문자 Z(90)'보다 숫자가 크면? (초기화대상)
        //아스키코드에 n을 더한 값이 122(영소문자z) 보다 크면 (소문자인데 초기화대상)
            
        }else if (getAscii <= 90 && getAscii +n > 90  || getAscii + n > 122) {
            answer += String.fromCharCode(getAscii+n-26);
            
            //초기화를 어떠케해야할지 ㅗㅁ르ㅔㄱㅅ어요ㅠㅠㅠㅠ포기!!!
        }else answer += String.fromCharCode(getAscii+n);
        
    } return answer;
}

