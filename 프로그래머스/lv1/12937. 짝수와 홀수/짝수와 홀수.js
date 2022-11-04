function solution(num) {
    var answer = '';
    if (Math.abs(num) % 2 === 1){
        answer = 'Odd';
    }else answer = 'Even';
    return answer;
}

//if num을 2로 나눈 나머지가 0이면 짝수 --> return "Even"
//                       1이면 홀수 --> return "Odd"

//제출후 채점하기 눌렀는데 테스트 2개 실패 --> 뭐지?
//int 범위의 정수? --> 음수도 포함이란 말에 음수처리.