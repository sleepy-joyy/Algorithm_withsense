function solution(k, tangerine) {
  let answer = 0;
  let obj = {};
  
    
  tangerine.forEach((size)=> obj[size] = (obj[size] || 0) +1);
        //    [1, 3, 2, 5, 4, 5, 2, 3]	//
        //탠저린 배열에서 각각 귤사이즈를 키로하는 객체를 만들고, 이미 키가 존재한다면 그값에 +1을한다.
        //obj {1:1, 3:2, 2:2, 5:2, 4:1}
    
  const arr = Object.values(obj).sort((a,b) => b-a)
    //해당사이즈의 귤이 많은것 부터 내림차순해서 k개로 박스를 채워야 사이즈가 덜 제각각일 것이므로 내림차순한다.
     //arr=[2,2,2,1,1]


      while(k>0) {                //채워야할 k개가 남아있을때까지 계속반복하고
        answer++;                // 다른종류가 쓰엿음을 표시하기 위해 1씩 더한다.
        k-=arr.splice(0,1)[0];  // 그리고 K에서 그 갯수를 빼고, 사이즈 배열에서도 제거한다.
      }

      return answer;
}
