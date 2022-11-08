function solution(a, b) {
    
  let sum = 0;
  let arr = [];
    
    if(a<b){
      for(let i=a; i<=b; i++){
          arr.push(i);
      }
     }else{
        for(let i=a; i>=b; i--){
            arr.push(i);
      }
    }
        
        
  for(let j= 0; j<arr.length;j++){
      sum = sum + Number(arr[j]);
  }
      return sum;
}


//sum 값을 담을 변수 선언, 숫자형 0 할당;
//3 ,5가 들어왔을때 --> 3,4,5가 담길 배열 arr 선언
//5, 3이 들어올 수 도 있으니깐 --> if 문으로 a,b 대소비교

//a<b일 경우
//for 문을 돌면서 a부터 돌면서, b와 같거나 작은 수를 1씩증가 하며 배열에 push

//a>b일 경우
//for 문을 돌면서 b부터 내려오면서, a와 같거나 큰수를 1씩감소 하며 배열에 push


//배열의 모든요소를 숫자형으로 바꾸고, for 문을 돌면서 sum에 누적
// 리턴sum.