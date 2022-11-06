function solution(s){
  
  let letters = s.toUpperCase()
  let pcount = 0;
  let ycount = 0;
  let result;
  
  for(i=0;i<letters.length;i++){
      if(letters[i]==="P"){
          pcount = pcount + 1;
      } else if (letters[i]==="Y"){
          ycount = ycount + 1;
      }
   }
      
  if (pcount === 0 && ycount === 0){
      result = true;
  }else if (pcount === ycount){
      result = true;
  }else if (pcount !== ycount)
      result = false;
  return result;
}

//match()를 써보고싶었는데 문서를 봐도 모르겟응게 일단 패스
//개수비교만 하면되니까 toUpperCase로 변환한다
//변환한 문자열이 "P"와 같으면 pcount + 1
//변환한 문자열이 "Y"와 같으면 ycount + 1
//p의 개수와 y개수 모두 둘다 0 이라면 리턴 트루
//만약 p의개수와 y의 개수가 같다면 리턴 트루
//아니면 리턴 폴스.