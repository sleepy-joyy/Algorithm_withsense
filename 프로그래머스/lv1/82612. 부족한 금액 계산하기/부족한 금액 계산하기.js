function solution(price, money, count) {

  let ttlprice = 0;  //회차별 이용요금 값 변수 선언
  let result=0;      //모자란 금액 리턴값 변수 선언
  
  for(let i=1; i<=count; i++){      //i 회차당 price를 곱한값을 ttlprice에 담음
      ttlprice += price * i;
  } 
    
    result = money - ttlprice;      //내가가진 money - 회차별이용금액누적값(ttlprice)를 뺌
    result = result >=0 ? 0 : Math.abs(result); //만약 모자란금액이 0보다크면 0출력, 아니면 부호뺀 절대값 출력
    return result;
}

//이랬더니 테스트4만 실패했는데 지문을 잘못이해했음ㅋㅋㅋㅋㅋㅋ
//모자라면 출력하고 남든 딱맞게 썼든 어쨋든 안모자라면 0이었던것임 ㅠ
