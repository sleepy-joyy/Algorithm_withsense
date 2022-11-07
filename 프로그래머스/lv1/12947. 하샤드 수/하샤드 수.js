function solution(x) {

    let sum = 0;
    x = String(x)
    
    for(let i = 0; i < x.length; i++) {
        sum = sum + Number(x[i]);
    }
    if(x % sum === 0) {
        return true;
    } 
     
    return false;
}
    
// 자릿수의 합을 담을 합계 변수 선언.
// x를 문자열로 변환? 
// 1번자릿수 2번자릿수 ...을 더하기 위해 for문을 돌리기
// sum = sum + x[i]인데 이제 문자열이니껜 숫자로
// 하샤드이려면 x가 sum으로 나눠 떨어져야한댓으니깐 x%sum ===0
// 맞으면 리턴트루 아니면 리턴폴스.