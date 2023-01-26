function solution(today, terms, privacies) {
  var answer = [];
    
  const todayYMD = today.split(".").map((v) => +v);
     //todayYMD = [ 2022, 5, 19 ]

    
  const termMonth = terms.map((v) => {
    const [type, duration] = v.split(" ");
    return { type: type, duration: +duration };
  });

     /* termMonth = 
     [
      { type: 'A', duration: 6 },
      { type: 'B', duration: 12 },
      { type: 'C', duration: 3 }
    ]
    */

  let client = privacies.map((v) => {
    const [date, type] = v.split(" ");
    const [year, month, day] = date.split(".").map((x) => +x);
    return [type, year, month, day];
  });

      /*client = 
    [
      [ 'A', 2021, 5, 2 ],
      [ 'B', 2021, 7, 1 ],
      [ 'C', 2022, 2, 19 ],
      [ 'C', 2022, 2, 20 ]
    ]
    */

  //(오늘날짜 - 고객정보수집시점) 으로 그동안의 보관기간을 구한다.
  for (let i = 0; i < client.length; i++) {
    let Y = (todayYMD[0] - client[i][1]) * 12;  //1년을 12개월로 환산하여 month 값으로만 보관기간을 체크. 0년이면 0개월, 1년이면 12개월
    let M = todayYMD[1] - client[i][2];
    let D = todayYMD[2] - client[i][3];
    let sameTerm = termMonth.filter((v) => v.type === client[i][0]);
      
    if (Y + M > sameTerm[0].duration || (Y + M === sameTerm[0].duration && D >= 0)) {  //이미 보관기간의 개월수를 넘었거나, 보관기간 개월수는 같은데, 데이가 하루라도 넘었다면?
      answer.push(i + 1);                                                               //삭제해야할 대상으로 보고 i인덱스는 0부터시작하니까 1을더해서 1번째 고객정보삭제를 푸시한다.
    } else continue;
  }
  return answer;
}

