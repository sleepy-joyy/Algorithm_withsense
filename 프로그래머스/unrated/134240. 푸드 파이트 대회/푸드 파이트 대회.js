function solution(food) {

  let tmp = [0];
                                                            //[1, 7, 1, 2]
  for(let i=food.length; i>=1; i--){                        //3번인덱스->2번인덱스->1번인덱스
    if(food[i] >= 2){
        food[i] = Math.floor(food[i]/2);                    //[1, 7, 1, ☑️1] 로 변경됨
          let repeatStr = String(i).repeat(food[i]);         //인덱스 3을 '3'으로바꾸고 ☑️1 만큼반복해서 문자열변수에 저장
          tmp.unshift(repeatStr)                             //언쉬프트,푸시하면 tmp는 ['3',0,'3'] 이 된다. 이걸반복.
          tmp.push(repeatStr)
    }
      else continue;
  }
  return tmp.join('');
}




//food[0] = 항상 1개의 물 => 항상 가운데 str의 가운데 위치함. --> 새 어레이에 0부터 두고 앞뒤로 푸시리핏,언쉬프트 리핏하면 되지않을까?
//food[i] i번음식의 수? [1,7,1,2] //1번째 인덱스 7 -> 1번음식 수웅이 3개 | 상대선수 3개 (1개버림) (==>항상 짝수개여야함)
                                //2번 인덱스 1 --> 2번음식 못먹음 (상대선수도 먹어야하니깐 모든 음식은 최소2개이상여야함)
                                //3번 인덱스 2개 --> 3번음식 수웅이 1개 | 상대선수 1개 
                                //111303111


// 새로운 어레이(tmp) 선언후 0(물)을 넣고 가운데 중심축으로 둔다
// 0을 기점으로 3번째음식, 2번째음식, 1번째 음식 순으로 unshift, push 할거라서 반복문을 거꾸로돈다
// [1,7,1,2] -> length = 4 ; 0번째인덱스는 물이니까 필요없고 1번째인덱스까지만 돈다 ; i--

// 만약 음식이 2개이상이라면? 
        //음식을 2로나눈 몫을 구해서 food배열에 재할당한다.  (수웅이 vs 상대 몇개씩 반복해서 i번째 음식 넣을건지 결정)
        //현재 인덱스 숫자를 문자열로 하고, 2로나눈 몫만큼 repeat한다.
        //앞에 언쉬프트로 추가해주고, 똑같이 뒤에 푸시로 추가해준다.
// 만약에 음식이 2개 이상이 아니라면 푸파에 못씀. 컨티뉴
// 마지막에 join 으로 문자열로 변환.