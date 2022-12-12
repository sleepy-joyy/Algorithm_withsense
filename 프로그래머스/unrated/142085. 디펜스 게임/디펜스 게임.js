function solution(n, k, enemy) {
  let left = 0;
  let right = enemy.length;
  
  const getSum = (index) => (index + 1 - k >= 0 ? enemy
    .slice(0, index + 1)
    .sort((a, b) => a - b)
    .slice(0, index + 1 - k)
    .reduce((acc, cur) => acc + cur, 0) : 0);
  
  while (true) {
    if (right - left === 1) return right;

    const mid = Math.floor((left + right) / 2);
    const sum = getSum(mid);
    
    if (n >= sum) {
      left = mid;
    } else {
      right = mid;
    }
  }
}
    
// // 왜 위에 풀이는 통과를 하고?  왜 아래 풀이는 채점 통과를 못하는가?ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// function solution(n, k, enemy) {
    
//   /* 씁..테케 통과는 되는데, 제출이 안돼서 검색 :파라메트릭 서치(이진탐색) 및 큐 문제라고 한다.
//   mid의 위치에서 지금 가진 n명의 병사와 k개의 무적권으로 막을 수 있다면 L을 mid+1로 옮긴다.
//       - 막을 수 있는지 어케암? 
//         -> mid 까지의 라운드개수에 - k개의 무적권 사용해서 =남은 라운드의 적수 총합을 구해서
//         -> n명의 병사보다 작은지 확인한다. 
//   막을 수 없다면 R을 mid 로 옮기고 원래있던 mid의 위치는 새로 설정된 L,R 중간으로 다시 조정하여 범위를 좁힌다
//   중요한건 L의위치가 방어여부를 결정한다. L 미만까지는 다 방어가능 L 이상부터는 방어불가능으로 보고 범위를 좁혀나간다.
//   범위를 계속 좁히고 좁혀서 L위치 인덱스가 R위치 인덱스보다 크거나 같아지면 바로 L인덱스 위치를 리턴한다.
//   */
  
//   let left = 0
//   let right = enemy.length;

// /*   [4, 2, 4, 5, 3, 3, 1]   k=3 n=7
// idx   0  1  2  3  4  5  6
// pos   L        M           R
// val   0     3.5->3         7
      
// */
// // mid의 위치에서 현재 자원으로 방어할 수 있나 확인하기
    
//   const sumTillMid = (midIdx) => (midIdx + 1 - k >= 0 ? enemy    //무적권으로 모든 라운드커버가 불가능하면
//                .slice(0, midIdx + 1)      //에너미 배열의 중간라운드까지 잘라서 (slice end미포함 이니까 +1) [4,2,4,5]
//                .sort()                    //오름차순해서 적은 수의 적들만 n명의 병사로 상대, 많은적수는 k무적권을 쓴다. [2,4,4,5]
//                .slice(0,midIdx+1 - k)     //많은 적수의 라운드를 k무적권을 사용하여 빼주고 k=3 -> 4-3 ->slice(0,1) [2]
//                .reduce((acc,cur)=> acc+cur,0) : 0); //남은 앞에 라운드 적수들을 다 더한다. 병사2명으로 mid 까지 방어가능
  
//   while(true){
//       if (left >= right) return left;
      
//       let mid = Math.floor((left+right)/2);

//       n >= sumTillMid(mid)            //n=7, sumTillMid 의값은 2로 트루
//           ? left = mid+1              //left의 위치를 mid+1인 4로 옮기고 다시반복. (mid(3)까지 방어가능인거 확인했으니까 그다음자리로 옮기는것.)
//           : right = mid;
//   }
// }
  



// /*2트   [4, 2, 4, 5, 3, 3, 1]     k=3 n=7 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// idx     0  1  2  3  4  5  6
// pos                 L  M     R
// val                 4  5     7
      

//   const sumTillMid = (midIdx) => (midIdx + 1 - k >= 0 ? enemy   
//                .slice(0, midIdx + 1)      //(slice end미포함 이니까 +1) [4,2,4,5,3,3]
//                .sort()                    //오름차순해서 적은 수의 적들만 n명의 병사로 상대, 많은적수는 k무적권을 쓴다. [2,3,3,4,4,5]
//                .slice(0,midIdx+1 - k)     //많은 적수의 라운드를 k무적권을 사용하여 빼주고 k=3 -> 6-3 ->slice(0,3) [2,3,3]
//                .reduce((acc,cur)=> acc+cur,0) : 0); //남은 앞에 라운드 적수들을 다 더한다. 병사8명있어야 현재 Mid위치 라운드까지 방어가능
  

//       n >= sumTillMid(mid)            //n=7, sumTillMid 값은 8로 폴스
//           ? left = mid+1                
//           : right = mid;              //right의 위치를 mid인 5로 옮기고 다시반복. (현재 L=4, M=4.5, R=5)
          
          
          

// 3트   [4, 2, 4, 5, 3, 3, 1]     k=3 n=7 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// idx   0  1  2  3  4  5  6
// pos               LM R
// val               44 5


//   const sumTillMid = (midIdx) => (midIdx + 1 - k >= 0 ? enemy   
//                .slice(0, midIdx + 1)      //(slice end미포함 이니까 +1) [4,2,4,5,3]
//                .sort()                    //오름차순해서 적은 수의 적들만 n명의 병사로 상대, 많은적수는 k무적권을 쓴다. [2,3,4,4,5]
//                .slice(0,midIdx+1 - k)     //많은 적수의 라운드를 k무적권을 사용하여 빼주고 k=3 -> 5-3 ->slice(0,2) [2,3]
//                .reduce((acc,cur)=> acc+cur,0) : 0); //남은 앞에 라운드 적수들을 다 더한다. 병사 5명 있어야 현재 Mid위치 라운드까지 방어가능
               

//   while(true){
//       if (left >= right) return left;
      
//       n >= sumTillMid(mid)            //n=7, sumTillMid 의 값은 5로 트루
//           ? left = mid+1              //left 위치를 mid+1인 5로 옮기고 다시반복하려고 보니 (현재 L=5  R=5) 다음 while 반복에서 if문 충족 리턴 left
//           : right = mid;             
//  */