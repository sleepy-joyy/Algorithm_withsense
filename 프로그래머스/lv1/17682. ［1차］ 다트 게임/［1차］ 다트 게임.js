function solution(dartResult) {
 
//1) for 문을 돌면서 dartResult 문자열을 돈다 '1S2D*3T'
//      [i= 숫자인경우]   -> 그냥 origin 변수에 i 숫자를 저장
                        // 10일때만 분기 -> if([i] === 1 && [i+1] === 0) 이면 숫자tmp = 10, 그리고 i값을 하나 더 높인다.
    
//      [i = 문자인경우]  -> 'S' 면 tmp 숫자에 1제곱 해서 answer[]에 푸시한다
//                        'D'면 tmp 숫자에 2제곱        "
//                        'T'면 tmp 숫자에 3제곱        "

//2)    [i = 특문인경우]  '*' 이면 answer배열에 있는 모든 숫자들 각각에     *2   (<-- 검색 각각..어쩌라느ㄴ거!!!!!!!)
//                     '#' 이면 배열의 마지막 숫자(answer.length-1)에  * -1
// for 문 끝
//3) answer.reduce() ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    
    
    let origin = 0;                                 // 제곱을 당할 원본점수 변수 선언 (1~10)
    let answer = [];                                // 제곱이 처리된 숫자를 담을 배열 선언
    
    for(let i=0; i<dartResult.length; i++) {        // 1S2D*3T
        if(dartResult[i].match(/[0-9]/)) {
            if(dartResult[i]==='1' && dartResult[i+1]==='0') {  //<---여기서 막혓음 ㅠ 검색 고고
                origin=10;
                i++;
            }
            else origin = dartResult[i]; 
        }

        else if(dartResult[i] === 'S') answer.push(Math.pow(origin, 1));   //S면 원본점수에 1제곱 후 푸시
        else if(dartResult[i] === 'D') answer.push(Math.pow(origin, 2));   //D면 원본점수에 2제곱 후 푸시
        else if(dartResult[i] === 'T') answer.push(Math.pow(origin, 3));   //T면 원본점수에 3제곱 후 푸시
        
     //2)  
        else if(dartResult[i] ==='*') {         // 별이면 answer배열에 방금 막 올라간 현재점수랑, 이전 점수에 * 2해야함.
            answer[answer.length-1] *= 2;    
            answer[answer.length-2] *= 2;    //<--- 여기서(로직4번) 또 막혔음ㅠㅠ 검색 고고.
                                            // 만약에 answer=[1]만 있는 경우를 아주 심각하게 고민했지만(?)
                                            //-1번 인덱스에 접근 undefined * 2가되서 = NaN. 
                                           // 그치만 -1번 인덱스라 무시되고 reduce는 정상작동하더라..ㅠ_ㅠ유유
        }
        else if(dartResult[i] === '#') answer[answer.length-1] *= -1;  //#이면 방금올라간 점수에 * -1한다.
    }
    
    //3)
    return answer.reduce((acc, cur) => acc + cur);
}