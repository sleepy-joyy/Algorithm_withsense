function solution(number, limit, power) {
  const nums = [];

/*1부터 number까지의 약수를 배열에 푸시한다
약수는 약수를 구하려는 수 본인을 제외하고 n/2 보다 클 수 없기 때문에 1부터 절반값까지만 체크해서 디바이저 갯수에 담고
나중에 최종적으로는 지금까지 구해진 약수에 + 자기자신을 포함시켜준다는 의미로 1을 더해준다.
map 을써서 만약에 현재 약수갯수의 수가 limit 보다 크다면 power로 교체하고, 아니면 그냥 그대로 둔다
reduce써서 누적합산. 끝!
*/
    
    
  for (let i = 1; i <= number; i++) {  //number 5면 [1의약수,2의약수,3의약수, 4의약수, 5의약수]각개수 구하기
    let divisor = 0;
        for (let j = 1; j <= i/2; j++) {
          if (i % j === 0) {
            divisor++
          }
        }                                    //  1        2        3       4      5
    nums.push(divisor + 1);                 //[   1,      2,       2,      3,     2 ] ==> sum  10
  }                                         //[(1하나),  (1과2), (1과3),  (1,2,4), (1과5)]

    return nums.map((n) => n > limit ? power : n).reduce((acc,cur)=> acc+cur);
}