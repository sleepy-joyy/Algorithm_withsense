function solution(k, m, score) {

    if(score.length < m) return 0;       // 이윤이 없는경우 = 박스를 못만드는 경우 = m개보다 사과가 적을때
    score.sort();                       //일단 가장 저퀄 사과 찾기위해 오름차순 정렬
    let profit = 0;                     //총합 더할 profit 변수선언
  
    while(score.length >= m){                       //필요개수보다 현재가진 사과 갯수가 많거나 같을때까지 박스만들기 반복 [1,1,1,2,2,3,3]
    let box = score.splice(score.length - m, m);     //splice(start,deletecount) 사용      splice[(7-4),4] =[2,2,3,3]
                                                     //최대이익을위해 고퀄박스부터 만듬      
      
    let price = m * box[0];     //정렬했으니 현재박스의 0번째인덱스가 가장 저퀄사과일테니까 * m개 하면 해당박스 이익
        profit += price;          //이윤에 박스가격을 더해주고 while문 돌러감.
  }
  
  return profit;
}






//solution(3, 4, [1, 2, 3, 1, 2, 3, 1])
//k는 무시 // 최소필요개수 4개 // 내가가진 사과갯수 7개


/* 이익 = 가장 로퀄 사과점수(p) * 필요사과갯수(m) *상자갯수
k는 왜나온거지....?

0.이윤이 0일때는 가진 사과가 부족할때를 처리한다. 
1.sort 오름차순한다
2.m개씩 스플라이스 (기존배열에서 삭제ㅇㅇ! 기존사과를 판매할 상자로옮겼으니까)
3.배열에 0번째인덱스랑 m을 곱하고
4. sum?*/