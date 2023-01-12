function solution(t, p) {
  let answer = 0;
  
  for (let i = 0; i < t.length; i++) {
      let tmpStr = t.substring(i,p.length+i);
      if (tmpStr.length < p.length ) return answer;
      else {
        if(Number(tmpStr) <= Number(p)) answer++;
      }
  }
  return answer;
}
solution("3141592", "271");


/*314,141,415,159,592,92*/