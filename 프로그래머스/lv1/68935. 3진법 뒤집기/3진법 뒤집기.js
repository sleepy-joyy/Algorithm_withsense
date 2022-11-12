function solution(n) {
  var answer = 0;
  
  let trit = n.toString(3).split('');
  let toBeDecimal = trit.reverse().join('');
  
  answer = parseInt(toBeDecimal,3);
  return answer;
  

}


//솔직히 진수 바꾸는 방법은 구글링 뿐이 없음 나는 천재가 아닝게,,
//10진수에서 --> n 진수로 바꿀때 // 바꿀수.toString(n);
//n진수에서 --> 10진수로 바꿀때 // parserInt(바꿀수, n =바꿀수의 현재진수) 
                                        //==> 바꿀진수를 입력하는게 아니라 현재진수!