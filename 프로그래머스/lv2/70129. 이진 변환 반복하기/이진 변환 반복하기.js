function solution(s) {
    var answer = [0,0];

    while (s !== '1') {
        let len = s.length;  //제거할 0의 개수를 구하기 위해 전체 렝스를 기억
        s = s.toString(2).match(/1/g).length; // 2진법으로 표현하여 1의 갯수를 구해서 s에 재할당
        answer[0] ++;           //이진법으로 변환한 횟수 늘려주기
        answer[1] += len-s;     //제거된 0의 갯수 (전체렝스-1의 개수)
        s = s.toString(2);      // 다시2진법돌리러가
    }
    
    return answer;
}