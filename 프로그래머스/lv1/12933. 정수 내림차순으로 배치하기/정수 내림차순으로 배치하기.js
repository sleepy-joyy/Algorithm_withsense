function solution(n) {
    let result;
    let arr = String(n).split("").map(Number);
         arr.sort(function(a, b) {
            return b - a;});
    result = Number(arr.join(''))
    return result;

}

//숫자 n을 string 문자열로 바꾸고 split('')해서 한글자씩 쪼개기
//배열요소를 .map 을 이용해 number형태로 변환
//sort()함수사용하여 내림차순정렬 (==>구글링ㅜ_ㅜ)
//결과를 배열에서 하나의 문자열로 join
//해당문자열을 다시 숫자형으로 바꿔주고 result 에 할당
//return result;