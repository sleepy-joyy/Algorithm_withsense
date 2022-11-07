function solution(x, n) {
    
//리스트를 리턴한다는게..배열을 리턴한단 얘기인가요?
    
// 입출력 n 이 5이면 0번째,1번째,2번째,3번째,4번째 까지! 
// n이 배열의 길이보다 커야 반복
//x부터 시작하니까 for i = x ; n > answer.length ; i+x;
//    answer.push(i)

      let answer = [];
         for(let i=x; n>answer.length;i+=x){
             answer.push(i);
          }
       return answer;
  }
  