// function solution(n, left, right) {
//     let arr = [];
//     for(let i = 0 ; i<n;i++){
//         for(let j = 0 ; j<n;j++){
//             let max = Math.max(i, j)
//             arr.push(max+1)
//         }
//     }
//     arr = arr.slice(left, right+1)
//     return arr
// }
//테스트 2,3,12~20 모두 런타임에러//


/*
[
  [1 2 3 4],  => 1차원화 [1,2,3,4 | 2,2,3,4 | 3,3,3,4  |4, 4, 4, 4]
  [2 2 3 4],    LRidx   0 1 2 3   4 5 6 7   8 9 10 11 12 13 14 15            
  [3 3 3 4],            
  [4 4 4 4],
]

     1     2    3       4
    (0,0) (0,1) (0,2) (0,3)       좌표(x,y)에서 둘중 더 큰값에 +1한게 그값이 된다.
     2     2     3      4
    (1,0) (1,1) (1,2) (1,3) <--요기 7번째인덱스 좌표는 (1,3) 이중에 더큰값에 +1한게 값
     3      3    3      4 
    (2,0) (2,1) (2,2) (2,3)
     4      4     4     4
    (3,0) (3,1) (3,2) (3,3)
   

*/


function solution(n, left, right) {
    const answer = [];
    
            //  n = 4 이고, i=7부터 시작해서 14까지 올라가면서 값구할거임
    for (let i = left; i  <= right; i++) {
        const x = parseInt(i/n);  // 7/4 =>         몫!    1
        const y = i%n;            //  7%4 =>        나머지  3
        answer.push(Math.max(x, y) + 1)
    }
    return answer;
}