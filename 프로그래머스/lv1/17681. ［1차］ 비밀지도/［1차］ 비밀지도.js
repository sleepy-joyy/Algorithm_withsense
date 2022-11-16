

function solution(n, arr1, arr2) {
  const answer = [];
    let tmp = '';
    
    //str.padStart(targetLength [, padString])
    
  for (let i = 0; i < n; i++) {      
                                        // arr1의 i번째와 arr2의 i번째 값을 겹쳐서 row1,2,3,4,5 만드는 반복문
    let row = (arr1[i] | arr2[i]).toString(2).padStart(n,'0');  //9,30 --> 11111 //20,1 --> 10101
      
        for (let j=0; j<n; j++){                //i번째 row의 j번째 인덱스 값이 
        if(row[j] === '1') {tmp += '#';}            //1이면 #으로 바꾸고 tmp에 누적
        else {tmp +=' ';}                            //1이 아니면 0이니깐 그냥 tmp에 공백 누적
     } answer.push(tmp);                            //tmp문자열을 앤서에 푸시하고
        tmp = "";                                   //tmp클리어 후 다음 arr1,arr2 돌림.
    }   
    return answer;                        //테스트1만통과, 2실패.22,14의 row "####  " vs " #### "
}
    
    
//하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다. 
//벽 부분을 1, 공백 부분을 0으로 부호화
//    9면 2진법 01001        20 = 10100
//    30 2진법  11110         1 = 00001
//    ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ       ㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//    row1완성  11111      row2완성  10101

//문제눈 14엿네...
//0s = 00000  --> 0으로 다일단 넣어줘야하는 상황 효근님의 제안으로 padStart적용!
//14 =  1110
//22 = 10110
//     01110
