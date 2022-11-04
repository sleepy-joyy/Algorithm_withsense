function solution(n)
{
    let sum=0;
    let arr = String(n).split("");
    for(i=0;i<arr.length;i++){
        sum += Number(arr[i])
    } return sum;
}


// 결과값을 담을 새로운 변수 sum 을 선언하고 숫자형을 넣기위해 0을 할당.
// 새로운 배열 arr선언
// n의 값을 자릿수별로 구분하기 위해 split("")을 쓰고, 그를 위해 n을 문자열로 전환
// 반복문을 돌려서 배열의 각각의 문자열 값을 확인하고, 숫자형으로 변환후 sum에 누적더하기
// return sum.