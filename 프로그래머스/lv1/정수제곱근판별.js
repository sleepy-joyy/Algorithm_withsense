function solution(n) {
  let result = 0;
  for(i=1; i<50000000000000;i++){
      if(i*i === n){
          result = Math.pow(i+1,2);
      }else result = -1;
  }
  return result;
}


//[접근을 못하겠어요]
//어떤 수의 제곱인지

// for 문을 어떻게..넣어야하즤?
//   if(i*i === n이면){
//   return Math.pow(i+1, 2);
// else -1;

