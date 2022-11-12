function solution(arr1, arr2) {
    
    //arr1  [[1,2],[2,3]]
    //arr2  [[3,4],[5,6]]
   //return [[4,6],[7,9]] 
    
    let answer = [];                             //가장 바깥 대괄호
    
    for(let i = 0; i<arr1.length; i ++){
        let inner = [];                           //arr1의 길이 만큼 안쪽 배열 [] 생성! //  [[inner1] , [inner2]]
        for(let j = 0; j <arr1[0].length ; j++){ //arr1의 0번째 인덱스의 값 길이([1,2]=2번)만큼 돌면서 i번째 배열의 j값 확인
            inner.push(arr1[i][j] + arr2[i][j]);  //arr1번의 i번째배열의 j번째 요소 + arr2번의 i번째배열의 j번째 요소를 더해서
        }                                         //이너에 푸시
        answer.push(inner);                       //그이너를 answer에 푸시
    } 
    

    return answer;
}