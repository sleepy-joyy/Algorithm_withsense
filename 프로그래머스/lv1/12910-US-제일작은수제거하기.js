//제일 작은 수 제거하기


function solution(arr) {
    
  let result = [];
  
  arr.sort(function(a,b){return b-a;});
  arr.pop();
  result = arr.slice();
  
  if(result.length === 0 ){
      return result = [-1];
  } else return result;
}

//일단 원본배열 arr를 내림차순 정렬
//가장 마지막 요소(min) 를 pop으로 제거
//result 에 arr 할당

//만약 result 의 길이가 0 이면 // = [-1];
// 아니면 그냥 result 리턴.  왜 안 돼...ㅠ_ㅠ