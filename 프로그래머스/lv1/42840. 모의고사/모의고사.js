function solution(answers) {
    
    //수포자 1 : 1,2,3,4,5 
    //수포자 2 : 2,1,2,3, 2,4,2,5 
    //수포자 3 : 3,3,1,1,2,2,4,4,5,5 패턴
    
    //answer 의 i번째 정답과 매치하면
    //스코어 ++
    //사람별 스코어 수를 비교해서 가장 맥시멈인 수포자를 앤서배열에 푸시

    let supo1 = [1,2,3,4,5];       //5개
    let supo2 = [2,1,2,3,2,4,2,5];  // 8개
    let supo3 = [3,3,1,1,2,2,4,4,5,5]; //10개
    let score = [0,0,0];
    

    answers.forEach((v, idx) => {                           //결국 앤서 인덱스를 length로 나눈 나머지가 결국 배열의 인덱스가 되는건가?
        if (v === supo1[idx % supo1.length]) score[0]++;   //0을 5로나눈 나머지 0, 1을 5로나눈 나머지 1, 2를 5로나눈 나머지 2...
        if (v === supo2[idx % supo2.length]) score[1]++; 
        if (v === supo3[idx % supo3.length]) score[2]++;
    });
    
    
    let max = Math.max(...score);   //수포자3중 찍어서 가장 많이 많은자의 점수!!점수!!
    let answer = [];
    
    score.forEach((v, idx) => {                 //score배열을 돌면서 맥시멈스코어를 맞은 수포자의 인덱스 찾기
        if (v === max) answer.push(idx + 1);     //배열인덱스 0,1,2 --> 수포자 1,2,3으로 표현하기 위해 idx+1;
    })
    return answer;
}
