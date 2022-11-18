function solution(s) {
    
//채점시 테스트케이스 7,8,9 실패 
//어제 배운 map을 써보고싶군..^_ㅠ
//영단어를 키로하고 숫자를 값으로 하는 engNum 객체 선언
    
  const engNum = {
    'zero': 0,
    'one': 1, 
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  };

    
  let textNum = '';
  let answer = '';

    
    
  s.split('').map((word) => {
      isNaN(word) ? textNum += word : answer += word
     //s로 들어온 문자열을 한글자씩 쪼개서 숫자가 들어왔는지 확인
    // isNaN 문자면 true --> textNum이라는 변수에 한글자씩 저장
                      //sixseven의 구별
                     //six완성시 객체의 키로 존재하는지 확인 후 값인 숫자로 바꾸고 초기화
                    // -->si까진 미완이라 키로 존재하지 않아서 언디파인드.     
    // 숫자면 false -->숫자면 앤서로 직행
      
      if (engNum[textNum] !== undefined) {
        answer += engNum[textNum]; 
        textNum = ''
      } // 숫자가 아닌 문자열 'one' engNum 객체의 키로 존재하면, 앤서에 그 값(숫자)을 더하고, 문자열 textNum값을 초기화
  })

  return Number(answer); 
}