function solution(people, limit) {
  let boat = 0;
  
  people = people.sort((a,b)=> b-a);
  for(let i = 0, j=people.length-1 ; i <= j ; i++){
          if(people[i] + people[j] <= limit){
              j--
              boat++;
          }else
              boat++;
      }
      return boat;
  }
    

/* 내림차순 정렬해서 가장 무거미 + 가장 가벼미 2명씩 구출하기

 - 무거미 + 가벼미 합이 limit보다 작거나 같으면
   보트++ , 무거미는 (i++), 가벼미는(j--) 해서 구출됨을 표현
   
 - 무거미 + 가벼미 합이 limit보다 크면 무거미먼저 구출 (i++)
   보트++
     ==> 무거미 먼저 빼야 가장적은 수의 보트로 최대한 많은 사람을 구할수 있음.
 
 - 그렇게 무거미(i)인덱스가 가벼미(j)인덱스보다 작거나 같아질때 까지만 반복
 - 배열 pop() 하는 걸로 먼저 시도했는데 잔뜩 실패나서 j-- 참고
*/
