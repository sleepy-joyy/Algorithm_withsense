function solution(str1, str2) {

/* 1) 두글자씩 끊기 
    - 소문자화
    - 정규표현식 검사 test()문자열에 일치하는 부분이 있는지 확인 true 또는 false
2) 합집합 구하기
3) 교집합 구하기
4) 자카드유사도 구하기 == math.floor(교집합크기 / 합집합크기 * 65536)
*/
    let arr1 = [];
    let arr2 = [];
    let regEx =  /^[a-z]+$/
    
    
    for(let i =0; i< str1.length-1; i++){
        let tmp = str1.toLowerCase().substring(i,i+2);
        if(regEx.test(tmp)){
            arr1.push(tmp);
        }
    }
    
    for(let j=0; j<str2.length-1; j++){
        let tmp = str2.toLowerCase().substring(j,j+2);
        if(regEx.test(tmp)){
            arr2.push(tmp);
        }
    }
    
    let intersection = [];
    let union = [];

     
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) >= 0) {       //arr2의 i번째 글자2글자가 arr1에도 있다면 === 교집합
         intersection.push(arr1.splice(arr1.indexOf(arr2[i]), 1))     //arr1의 요소를 짤라내서 교집합에 푸시
       }
       union.push(arr2[i])  //그게 아니라면 arr2의 요소는 교집합이 아니니까 합집합에 넣는다.
     }

     for (let i = 0; i < arr1.length; i++) {  //위의 for문에서 splice 당하고 남은 arr1의 요소들은 차집합
       union.push(arr1[i])                      //따라서 합집합에 넣는다.
     }
    
   return union.length === 0 ? 65536 : Math.floor((intersection.length/union.length)*65536)
        
}