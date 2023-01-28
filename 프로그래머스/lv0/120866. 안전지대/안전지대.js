function solution(board) {
  var answer = 0;

  const nearby = [
    [-1, -1], //좌상향대각선
    [-1, 0], //위
    [-1, 1], //우상향대각선
    [0, -1], //왼
    [0, 1], //오
    [1, -1], //좌하향대각선
    [1, 0], //아래
    [1, 1], //우하향대각선
  ];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        //지뢰를 발견하면, nearby를 모두 다른값으로 변경하기
          
        nearby.forEach((position) => {
          let [xPointer, yPointer] = position;
          (xPointer = i + xPointer), (yPointer = j + yPointer);     
            
        //i와 j를 각각 더해서 현재 지뢰의 위치 기준 nearby 좌표로ㄱㄱ

          //지뢰의 주변영역으로 포인터를 이동시켜서 값을 바꿀껀데, 포인터가 갈수없는 영역일 경우는 제외해줘야함.
          //xPointer 는 배열의 i인덱스로 접근 -> 따라서 0보다 크고 board.length(ex_5*5--> 5)보다 작아야 이동가능한 범위에 있는것.
          //yPointer 는 배열의 j인덱스로 접근 -> 역시나 0보다 크고 n*n 크기니까 board[i].length 안해도 board.length; 안에 있으면 가능.
                // 위의 조건에 충족하여 이동한 포인터가 가르키는 값이 0일 때만 다른 값으로 바꿔줄수있다. 
                // 1일경우 또다른 지뢰가 있는 것이기 때문에 그 값을 바꾸면 안되고 다음 for문에서 확인해서 위험지역을 확장해야한다.

          if (
            xPointer >= 0 &&
            xPointer < board.length &&
            yPointer >= 0 &&
            yPointer < board.length &&
            board[xPointer][yPointer] === 0
          ) {
            board[xPointer][yPointer] = 2;
          }
        });
      }
    }
  }

  board.forEach((row) => row.forEach((col) => (col === 0 ? answer++ : 2)));
  return answer;
}

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],   //i=3, j=2
  [0, 0, 0, 0, 0],
]);


/*
좌상향대각선 board[i-1][j-1]  
      위  board[i-1][j]  
우상향대각선 board[i-1][j+1]   
      왼  board[i][j-1]
      오  board[i][j+1]
좌하향대각선 board[i+1][j-1]
     아래  board[i+1][j]
우하향대각선 board[i+1][j+1]
*/
