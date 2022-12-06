function solution(s) {
  var answer = 0;
  
  let same = 0;
  let diff = 0;
  let tmp = [];   //쪼개질 문자열을 담을 배열 변수선언
  
    while(s.length>0){          //쪼개고 쪼개서 남은문자열이 없을때까지 반복
        let sliceIdx = 0;      //쪼개질 자리의 인덱스를 담을 변수 선언
        
        for(let i =0; i<s.length; i++){
          if(s[0] === s[i]) same++  //0번째 글자랑 i번째 글자가 같다면 same++
          else diff++               //다르다면 diff++

          if(same === diff){        //그러다가 그 둘이 같아지는 순간이 오면 for문 탈출
             sliceIdx = i+1;         //slice 는 end 미포함이니까 +1더해줌
             break;
          }
        }
         tmp.push(s.slice(0,sliceIdx))  //0부터 sliceIdx까지 잘라서 tmp 배열에 푸시 "ab"
         s = s.slice(sliceIdx);    //s문자열은 앞에 잘려나간 단어 인덱스 부터 ~ 끝까지 "racadabra"
        if(sliceIdx === 0) break;  // //ab-...-br-a만 남은경우 same만 하나 올라가고, 
        //바로 push로 내려옴 (0,0)이되어 ''푸시. sliceIdx 0에서 바뀐적없으니 브레이크해서 와일문 빠져나옴.
    }
      return answer = tmp.length;
 }

  
  
solution("abracadabra")