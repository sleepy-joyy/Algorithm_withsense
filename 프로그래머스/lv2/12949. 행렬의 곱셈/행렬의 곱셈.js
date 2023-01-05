function solution(arr1, arr2) {
  let answer = [];  
  
  arr1.forEach(v=> answer.push(Array(arr2[0].length).fill(0)))
    //arr1의 행의 갯수만큼 빈배열을 만들고, 그안에 arr2의 0번째 인덱스 값,즉 열의 개수만큼 0채우기
    


  //i : arr1에서 행(row)
  //j : arr2에서 열(col)
  //k : arr2에서 행의 인덱스에 접근
  

  for(let i=0; i<arr1.length ; i++){  //arr1의 행의 인덱스
      for(let j =0; j<arr2[0].length; j++){ //arr2의 0번째 값 길이 = 곱해줄 열의 인덱스
          for(let k=0; k<arr2.length; k++){ //arr2의 행의 인덱스
            answer[i][j] += arr1[i][k] * arr2[k][j];
          }
      }
  }
  return answer;
}


/*
(3*2)   (2*2)                      [
[1,4]   [3,3]   =>   3+12, 3+12 => [15,15]
[3,2]   [3,3]   =>   9+6,  9+6     [15,15]     
[4,1]           =>   12+3, 12+3    [15,15]
                                    ]
*/