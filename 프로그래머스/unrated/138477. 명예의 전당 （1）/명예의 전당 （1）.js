function solution(k, score) {

    const honor = []
    const lowest = []
    
    for(let i =0; i<score.length; i++){
      if(i<k){                        // k(3)일 전까지
        honor.push(score[i]);        //모든이의 점수는 비교없이 그냥 명예의전당행
        honor.sort((a,b)=> b-a);    //내림차순 정렬, 최저점구하기
        lowest.push(honor.at(-1));  //매일의 최저점에 가장 낮은수 넣기
    
          //Array.at() => 해당 값에 해당하는 인덱스의 요소를 반환. arr.at(-1) === arr[arr.length-1]

      }else if(score[i]>Math.min(...honor)){  //k일을 넘어서면 그 점수가 최저점보다 큰지 비교
        honor.pop()                         //크면 최저점을 빼고
        honor.push(score[i])                //현재점수 넣고
        honor.sort((a,b) => b-a)            //다시내림차순정렬
        lowest.push(honor.at(-1));          //매일의 최저점에 가장 낮은점수 넣기
      } 
        else lowest.push(honor.at(-1));     //현재점수가 최저점보다 작으면 그냥 현재 honor 배열에서 가장낮은점수 푸시
    }
    return lowest;
}
