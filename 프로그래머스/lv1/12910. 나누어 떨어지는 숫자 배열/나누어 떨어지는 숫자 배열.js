function solution(arr, divisor) {
    
  let result = [];

  for(i=0; i<arr.length; i++){
      if(arr[i] % divisor === 0){
        result.push(arr[i]);
      }
    }

  if (result.length===0){
        result = [-1];
  }
  return result.sort(function(a, b){return a - b;});
}



//결과를 담을 배열 선언 [];

//for문 돌면서  if arr[i] % divisor === 0 이면
//result.push()arr[i];

//그렇게 나온 result 배열의 길이가 0이면 result = [-1]
//리턴 결과배열오름차순.sort()
