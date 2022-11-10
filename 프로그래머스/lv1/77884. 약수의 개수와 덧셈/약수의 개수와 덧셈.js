function solution(left, right) {  //13 ,17
  let arr = [];
  let sum = 0;
  
 for(i=left;i<=right;i++){  //13,14,15,16,17
   for(j=1;j<=i;j++){       //1부터 13까지 쥬르륵
     if(i % j === 0){      //i까지의 수를 모든 숫자로 나눠서 0이면 약수확정   
         arr.push(j)         //배열에 약수를 넣고
         }
     }
     if(arr.length % 2 === 0){ //배열의 길이가 짝수면
          sum += i            //sum에 i수를 더하고
      }else{sum -=i};         // 홀수면 i수를 뺀다
      arr = [];               //다음숫자(13->14) 넘어가기 전에 초기화
  }
  return sum;             //반복문 끝. 리턴 썸.ㅜ_ㅜ..
}