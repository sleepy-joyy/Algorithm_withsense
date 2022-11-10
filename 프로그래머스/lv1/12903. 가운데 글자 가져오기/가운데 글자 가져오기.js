function solution(s) {                     //"a b c d e"    " q w e r "
    var answer = '';                       // 0 1 2 3 4    // 0 1 2 3 //
    
    if (s.length % 2 !== 0) {               //문자열을 절반으로 나눠서 0이 아니면 홀수-->만약 홀수라면
      answer = s[Math.floor(s.length/2)];  
                                            // 홀수를 2로 나누면 .5가 항상 붙을테니깐 Math.floor사용 5->2가 됨. 그러면 0번째,1번째,2번째 값 출력
    } else {
        answer = s.slice((s.length/2)-1, (s.length/2)+1 ) //2글자 slice(시작지점,끝낼지점(미포함))이기 때문에 각각 -1과 +1을 해줘요
    } return answer;                                     //slice 된 문자열을 리턴해줘요!
}
