function solution(progresses, speeds) {
    
/*
1) 작업일수 구하기
작업일수 = (100 - progress[idx]) / speed[idx]
            7/1, 70/30, 45/5
        2.5일은 없어 => 소수점아래는 올려야 올바른 작업일수가 된다.
        math.ceil((100-progress[idx]) / speed[idx])
작업일수 = [7,3,9]

2) 몇개의 기능이 배포될지 셀 변수 feature 를 선언해놓기
3) 첫번째 기능은 몇일이 걸리든 무조건 첫번재에 배포되어야하니까 
   처음배포일을 작업일수[0]번째 일수로 지정해 놓기
4) 작업일수 배열을 순회하면서, 
   4-1) 이전작업일수보다 다음작업일수가 더 크면
        이전거 기능만 배포하는 것 = 바로 answer에 feature 푸시
        그다음에 feature를 0개로 리셋시키고
        배포날짜를 그 다음작업일수로 바꿔주기 위해 재할당.
        
   4-2) 이전작업일수보다 다음작업일수가 더 작으면
        이전거+다음거 합쳐서 한번에 두개의 기능을 배포할수 있으니까 feature ++    
        
5) 최종적으로 answer.push(feature)
   return answer
*/
    
    let answer = [];
    let days = progresses.map((v,idx)=> Math.ceil((100-v)/ speeds[idx]));
    let toBeDeployed = days[0];
    let feature = 0;    
    
    days.forEach((nextTime)=>{
        if(toBeDeployed < nextTime) {
            answer.push(feature)
            toBeDeployed = nextTime 
            feature = 0;
        }
        
        feature++;
    })
    answer.push(feature);
    return answer;
}