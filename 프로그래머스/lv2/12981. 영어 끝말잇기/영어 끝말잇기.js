function solution(n, words) {

  let previous = words[0];
  let round = 1;
  
  for(let i = 1; i<words.length; i++){
    let who = i % n + 1                     //** 말한사람찾기 : words 배열은 0번째부터시작했기때문에 +1!
    
    if (    
        words[i].length === 1 || 
        words.indexOf(words[i]) !== i ||
        previous.at(-1) !== words[i][0]
    ) {
        return [who, round];                //중복단어가 있거나 이전단어의 마지막글자랑 현재단어의 첫번째 글자가 일치하지 않으면 [탈락자,탈락라운드] 리턴
    } else previous = words[i]              //그게아니라면, 이전단어에 현재단어를 재할당
    
    if(who === n) round++;                  //지금말한사람이 플레이어 n명 중 마지막사람이면, 라운드 증가시킴
  }
  return [0,0];                             //위 반복문에서 리턴되지 않았으면, 끝말잇기 탈락자가 없으므로 [0,0]
}
