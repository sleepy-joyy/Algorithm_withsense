function solution(ingredient) {
    
    /* 1=빵 2=야채 3=고기 1=빵 => 1231이어야 1버거
    for문 돌면서 splice 쓰려고했는데 --> 인그리디언트 길이가 너무 길어서그런지 시간초과ㅠㅠ
    검색해보니까 4개씩 쌓일때마다 잘라서 확인하는 방식으로 가야한다고해서 방식변경 ㅠㅠ
   */
    
    let stack = [];
    let answer = 0;
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]); 
        
        if (stack.length >= 4) {                        //스택에 4개이상 쌓이면 뒤에서부터 그걸 잘라서
            const isBurger = stack.slice(-4).join('');  //문자열로 조인한다음에 '1231'인지 확인
            if(isBurger === '1231'){
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();                //맞으면 햄버거포장--> 스택에서 싹다내보내기
                answer++;                   //햄버거 만든갯수 ++
          }
        }
      }

  return answer;
}
