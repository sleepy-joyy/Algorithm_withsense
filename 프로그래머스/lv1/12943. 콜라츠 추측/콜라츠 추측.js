function solution(num) {
  let count = 0;

  while (num!==1){
    if (num % 2 === 0){
      num = num / 2;
    }else {
      num = (num*3) + 1;
    } count = count + 1;
  } 

  if (count >= 500){ return -1;}
    else return count;
  }


//반복횟수를 누적할 count 변수 선언 = 0 할당
//while 문을 돌며 1이 아닐 경우 계속 반복 + count = count + 1
//만약 num이 짝수일 경우 num / 2
// 홀수면 (num*3) + 1

//만약에 count가 500을 넘어버리면 -1 리턴
//아니면 그냥 누적된 카운트 리턴
