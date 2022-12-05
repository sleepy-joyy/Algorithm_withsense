function solution(board, moves) {
    
  let answer = 0;
  const stack = [];
    
    /*[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]]	   [1,5,3,5,1,2,1,4] */

  moves.forEach((pickup) => {                //크레인 작동위치들을 각각 순회
    for (let i = 0; i < board.length; i++) { //보드배열 순회하면서 각줄에서 인형뽑기
      let friends = board[i][pickup-1];  
                                    //인덱스는 0부터시작-> board[i행][뽑을번호-1]번째 프렌즈 뽑기
        
        
      if (friends === 0) continue;                  //0이라면 인형없음 다음 행(보드)으로 컨티뉴
      if (friends === stack[stack.length - 1]) {  //만약 스택에 쌓인 마지막 프렌즈와 번호가 같으면
        stack.pop();                            //이미쌓인 인형1개 pop + 사라진 인형 수 2개늘림
        answer += 2;
      } else {
        stack.push(friends);                //같지않으면 그냥 스택에 쌓음
      }

      board[i][pickup-1] = 0;           //인형이 뽑혔다고 표시하기 위해 0으로 재할당하고 다음크레인!
      break;
    }
  });

  return answer;
}
