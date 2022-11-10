function solution(absolutes, signs) {

    let sum = 0;                            //정수들의 합을 담은 sum 변수 선언
   
    for (let i = 0;i<absolutes.length;i++){  //일단 정수배열을 한번씩 돌면서
        if (signs[i]){                        //만약 signs의 값이 true 라면 
            sum += absolutes[i] * 1;         //양수니까 곱하기 1해서 sum에 더하고
        }else sum += absolutes[i] * -1;     //signs 값이 false 라면 음수니까 *-1 해서 더함
    }
    return sum;                             //그렇게 나온 합계를 리턴!


}